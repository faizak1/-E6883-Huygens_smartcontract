const Verification = artifacts.require('Verification.sol');

// mock data
const mockCandidate = {
    '0': '1234',
    '1': 'monirul',
    '2': 'islam',
    '3': '1234Street',
    '4': '1234UNI',
    ssn: '1234',
    firstName: 'monirul',
    lastName: 'islam',
    homeAddress: '1234STREET',
    uni: '1234UNI'
  }

const mockDegreeInfo = {
    '0': 'Columbia University',
    '1': '1234',
    '2': 'Bachelor of Science',
    '3': 'Computer Science',
    '4': '2020',
    university: 'Columbia University',
    ssn: '1234',
    degreeName: 'Bachelor of Science',
    major: 'Computer Science',
    year: '2020',
    gpa:'4.0',
  }

  const mockEmployerResponse = {
    '0': 'monirul',
    '1': 'islam',
    '2': 'Columbia University',
    '3': 'Computer Science',
    '4': 'Bachelor of Science',
    '5': '2020',
    '6': '4.0',
  }
  

contract('Verification', () => {

    it('TEST_deploys a contract', async()=> {
        const verf = await Verification.deployed();
        console.log(verf.address);
        assert(verf.address != '');
    });

    it('TEST_method candidateHandler should set values to map storeCandidateInfo', async()=> {
        const verf = await Verification.deployed();
        await verf.candidateHandler("1234","monirul","islam","1234STREET","1234UNI");
        const result = await verf.storeCandidateInfo("1234")
        assert.equal(result['ssn'], mockCandidate['ssn'])
        assert.equal(result['firstName'], mockCandidate['firstName'])
        assert.equal(result['lastName'], mockCandidate['lastName'])
        assert.equal(result['homeAddress'], mockCandidate['homeAddress'])
        assert.equal(result['uni'], mockCandidate['uni'])
    });

    it('TEST_method institutionHandler should set values to map storeCandidateDegreeInfo', async()=> {
        const verf = await Verification.deployed();
        await verf.institutionHandler("Columbia University","1234","Bachelor of Science","Computer Science","2020","4.0");
        const result = await verf.storeCandidateDegreeInfo("1234")
        assert.equal(result['university'], mockDegreeInfo['university'])
        assert.equal(result['major'], mockDegreeInfo['major'])
        assert.equal(result['degree'], mockDegreeInfo['degree'])
        assert.equal(result['year'], mockDegreeInfo['year'])
        assert.equal(result['gpa'], mockDegreeInfo['gpa'])
    });

    it('INTEGRATION_TEST_method employerHandler should return candidate degree values', async()=> {
        const verf = await Verification.deployed();
        await verf.candidateHandler("1234","monirul","islam","1234STREET","1234UNI");
        await verf.institutionHandler("Columbia University","1234","Bachelor of Science","Computer Science","2020","4.0");
        const result = await verf.employerHandler("1234")
        // returned values are accesssed by index in solidity when we return multiple values
        assert.equal(result['0'], mockEmployerResponse['0'])
        assert.equal(result['1'], mockEmployerResponse['1'])
        assert.equal(result['2'], mockEmployerResponse['2'])
        assert.equal(result['3'], mockEmployerResponse['3'])
        assert.equal(result['4'], mockEmployerResponse['4'])
        assert.equal(result['5'], mockEmployerResponse['5'])
        assert.equal(result['6'], mockEmployerResponse['6'])
    });

});