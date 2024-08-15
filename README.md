# Cypress Test Automation

This repository contains automated tests written using [Cypress](https://www.cypress.io/). Follow the steps below to set up and run the tests.
## Prerequisites
Before you begin, ensure you have the following installed:
1. **Download  Visual Studio** https://code.visualstudio.com/download
2. [Node.js](https://nodejs.org/) (version 12 or higher): If you don't already have Homebrew installed, open your Terminal and paste the following command:
-  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
-  brew install node
-  node -v
-  npm -v
3. [npm](https://www.npmjs.com/) (comes with Node.js) ^^
4. **Clone the repository:**
-  git clone https://github.com/DimitarPlStoev/musala-soft-tests.git
-  open the repo with VS Code
5. **Install Cypress** : npm install cypress --save-dev
6. **Install dependencies** : npm install
7. **RUN** : npx cypress open 
8. When Cypress opens its browser, navigate to E2E testing, select the browser(in thes case Chrome), and select wich tests do you want to run
9. To create a report you have to install mochawesome with this command : npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator  ,  
and then run the test with: npx cypress run .  It will create a "reports" folder to show the results after the test run.