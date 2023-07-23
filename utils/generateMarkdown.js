function renderLicenseBadge(license) {
  if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(license) {
  // Implementation
}

function renderLicenseSection(license) {
  // Implementation
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## TableOfContents
  [Intallation](#installation)


  ## Installation
  ${data.installation}
  `;
}

module.exports = generateMarkdown;
