// Function to generate read me

const generateReadMe = (data) => {
    return`# ${data.title}
    
## Table of Contents

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Test Instructions](#test-instructions)

- [Questions](#questions)

- [Contributors](#contributors)

- [License](#license)

## Description 
${data.description}

## Installation
${data.installation}
    
## Usage
${data.useage}
    
## Test-Instructions
${data.testInstruction}
    
## Questions
- Github: [Click here](https://github.com/${data.gitHub})
- E-mail: [Click here](${data.email})
    
## Contributors
${data.contributors}
    
## License
${includeLicenseBadge(data)}
`;

}

// Renders badge for license user chooses to include

function includeLicenseBadge(data) {
    let licenseType = `${data.license}`;
    let theLicense = '';
    if(licenseType === 'MIT License') {
      theLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseType === 'GNU General Public License v3.0') {
      theLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseType === 'Apache License 2.0') {
      theLicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (licenseType === 'Mozilla Public License 2.0') {
      theLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else {
      licenseType = "N/A"
    };
    return theLicense;
  };

module.exports = generateReadMe;