define("EmployeePage", [], function() {
	return {
		entitySchemaName: "Employee",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "PhotoContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "Name",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Contact",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "Job",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "FullJobTitle",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4
					}
				}
			},
			{
				"operation": "merge",
				"name": "OrgStructureUnit",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5
					}
				}
			},
			{
				"operation": "merge",
				"name": "Account",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6
					}
				}
			},
			{
				"operation": "merge",
				"name": "Phone",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7
					}
				}
			},
			{
				"operation": "remove",
				"name": "Phone",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "Email",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8
					}
				}
			},
			{
				"operation": "remove",
				"name": "Email",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "BirthDate",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9
					}
				}
			},
			{
				"operation": "remove",
				"name": "BirthDate",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "Gender",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10
					}
				}
			},
			{
				"operation": "remove",
				"name": "Gender",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11
					}
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "BaseInfoTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "CareerTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "merge",
				"name": "CareerStartDate",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "CareerDueDate",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "ProbationDueDate",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "INTEGERa946e939-122d-421f-acb6-e141d4a91c83",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "CareerGeneralInfo"
					},
					"bindTo": "UsrVacationDays",
					"enabled": true
				},
				"parentName": "CareerGeneralInfo",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ReasonForDismissal",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "insert",
				"name": "INTEGERc8e2fb83-c731-4f6f-8206-b555bc04e038",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "CareerGeneralInfo"
					},
					"bindTo": "UsrDaysLeft",
					"enabled": true
				},
				"parentName": "CareerGeneralInfo",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "AdminTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "SysAdminUnit",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "remove",
				"name": "SysAdminUnit",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "UserIsActive",
				"values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 12,
						"row": 0
					}
				}
			},
			{
				"operation": "remove",
				"name": "UserIsActive",
				"properties": [
					"tip"
				]
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 3
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
