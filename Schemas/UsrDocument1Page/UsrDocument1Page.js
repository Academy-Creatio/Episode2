define("UsrDocument1Page", [], function() {
	return {
		entitySchemaName: "Document",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Number66c0ce7e-682d-483b-8c22-8bbfd22feb13",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Number"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Contact41353c25-2153-4bc2-958a-634530917dd1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Contact"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Accountb89b9b33-8979-4932-92cd-e224c30ec672",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Account"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab505941fbTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab505941fbTabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab505941fbTabLabelGroup03c9a727",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab505941fbTabLabelGroup03c9a727GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab505941fbTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab505941fbTabLabelGridLayout8bfbf10b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab505941fbTabLabelGroup03c9a727",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Date309f2423-de03-4476-a59e-690848089f26",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab505941fbTabLabelGridLayout8bfbf10b"
					},
					"bindTo": "Date"
				},
				"parentName": "Tab505941fbTabLabelGridLayout8bfbf10b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Owner714459a7-e7a5-47ed-8c03-235f81c2343c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab505941fbTabLabelGridLayout8bfbf10b"
					},
					"bindTo": "Owner"
				},
				"parentName": "Tab505941fbTabLabelGridLayout8bfbf10b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Stated08d8cda-cfc4-44dc-b591-c1967c17ff8e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab505941fbTabLabelGridLayout8bfbf10b"
					},
					"bindTo": "State"
				},
				"parentName": "Tab505941fbTabLabelGridLayout8bfbf10b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Typecfd3b9d2-91e6-4626-81c6-9d54bbc1858c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab505941fbTabLabelGridLayout8bfbf10b"
					},
					"bindTo": "Type"
				},
				"parentName": "Tab505941fbTabLabelGridLayout8bfbf10b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
