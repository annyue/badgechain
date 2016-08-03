# BadgeChain API documentation version 1.0

## User Stories and their Appropriate API Call

### Institution

#### Create Accounts for student and instructor on Blockchain Platform

![create-account-diagram](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgs/institution-create-accounts.svg)

### Instructor

#### Create Criteria for Badge

![create-criteria-diagram](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgs/instructor-create-criteria.svg)

### Student

#### View Badge Criteria

> As a student, I want to be able to view modules that will challenge me to develop a particular skillset so I can earn badges and credit.

![view-criteria-diagram](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgs/student-get-badge-criteria.svg)

#### Recieve Badge

> As a student, I want to receive a badge so I can document and show that I have learned a skill.

![retrieve-badges-diagram](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgsstudent-retrieve-badge.svg)

#### View All Previously Earned Badges

> As a student, I want to be able to view my badges and create specific views of those badges.

![view-badges-diagram](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgs/student-view-badges.svg)

#### Display Badges to Interest Parties

> As a student, I want to provide my badge to an employer so I can enhance my resume.

![student-publish-badges](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgs/student-display-public.svg)

### Employer

#### Validate Badges Presented by Prespective Employee (Student)

> As an employer, I want to be able to consider student badges in hiring decisions.

![employer-view-public](https://utls.github.io/badgechain/downloads/api-flow-diagrams/svgs/student-display-public.svg)



## /accounts

### /accounts

* **get**: Returns a collection of all Accounts.
* **post**: Added a new Issuer Organization

### /accounts/{acc-hash}

* **get**: Returns an Account by the given Blockchain Account Hash.
* **put**: Updates an Account by the given Blockchain Account Hash.
* **delete**: Deletes an Account by the given Blockchain Account Hash.
 
### /accounts/{acc-hash}/public

* **get**: Returns all of the Badges accociated with the given account that the account owner has elected to be shown publicly.

## /issuers

### /issuers

* **get**: Returns a collection of all IssuerOrganizations.
* **post**: Added a new IssuerOrganization

### /issuers/{id}

* **get**: Returns an IssuerOrganization by ID.
* **put**: Updates an IssuerOrganization by ID.
* **delete**: Deletes an IssuerOrganization by ID.

### /issuers/{id}/badges

* **get**: Returns a collection of all BadgeClasses belonging to the given IssuerOrganization ID.
* **post**: Added a new BadgeClass associated with the given IssuerOrganization ID.

### /issuers/{id}/badges/{id}

* **get**: Returns the a BadgeClass with the appropriate ID.
* **put**: Updates a BadgeClasses of the given ID.
* **delete**: Deletes a BadgeClasses with the given ID.

### /issuers/{id}/badges/{id}/assertions

* **get**: Returns a collection of all Assertions belonging to the given BadgeClass and IssuerOrganization.
* **post**: Added a new Assertion associated with the given BadgeClass and IssuerOrganization.

### /issuers/{id}/badges/{id}/assertions/{uid}

* **get**: Returns an Assertion with the appropriate UID.
* **put**: Updates an Assertion of the given UID.
* **delete**: Deletes an Assertion with the given UID.
