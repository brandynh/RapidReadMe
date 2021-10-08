  const generateReadMe = ({ title, description, installation, usage, testInstruction, gitHub, email, contributors, data }) =>  {
    return `# ${title}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Test Instructions](#test-instructions)
    - [Questions](#questions)
    - [Contributors](#contributors)
    - [License](#license)
    
    ## Description 
    ${description}
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## Test-Instructions
    ${testInstruction}
    
    ## Questions
    Github: ${gitHub}
    E-mail: ${email}
    
    ## Contributors
    ${contributors}
    
  `;
  }

module.exports = readMeOutline;