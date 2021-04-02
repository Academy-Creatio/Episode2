define("UsrRequests_Vacation_Internal", ["UsrRequestsPageMixin"], function() {
	return {
		entitySchemaName: "UsrRequests",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRequestsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRequests"
				}
			},
			"VisaDetailV29c58ce5a": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "UsrRequestsVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRequests"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrJobTitle": {
				"a2e9845e-794c-47cd-b9a2-bc4231e42e4e": {
					"uId": "a2e9845e-794c-47cd-b9a2-bc4231e42e4e",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrContact",
							"attributePath": "Job"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrContact"
							}
						}
					]
				}
			},
			"UsrDepartment": {
				"b1fa3ebf-3920-4328-bc88-82dd6cae327f": {
					"uId": "b1fa3ebf-3920-4328-bc88-82dd6cae327f",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrContact",
							"attributePath": "Department"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrContact"
							}
						}
					]
				}
			},
			"UsrDueDate": {
				"57afc68b-31bc-4882-a450-3fa72d8e1cab": {
					"uId": "57afc68b-31bc-4882-a450-3fa72d8e1cab",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "DATEADD",
								"arguments": [
									{
										"type": 1,
										"dataType": 7,
										"operandType": 1,
										"columnPath": "CreatedOn",
										"columnOperandType": 0
									},
									{
										"type": 1,
										"dataType": 4,
										"operandType": 0,
										"value": "7"
									},
									{
										"type": 1,
										"dataType": 1,
										"operandType": 0,
										"value": "D"
									}
								]
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "CreatedOn"
							}
						}
					]
				}
			},
			"UsrType": {
				"1132590f-cdf3-4c37-ba42-4b36ddc8f9d0": {
					"uId": "1132590f-cdf3-4c37-ba42-4b36ddc8f9d0",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrCategory",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "UsrCategory"
				},
				"fd0c7960-af74-41db-9520-475a0a1fcb5f": {
					"uId": "fd0c7960-af74-41db-9520-475a0a1fcb5f",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "UsrCategory",
					"comparisonType": 3,
					"autoClean": true,
					"autocomplete": true,
					"type": 1,
					"attribute": "UsrCategory"
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		mixins: {
			UsrRequestsPageMixin: "Terrasoft.UsrRequestsPageMixin",
		},
		methods: {
			onEntityInitialized: function() {
                this.callParent(arguments);
                this.setName(); //defined in UsrRequestsPageMixin
            },
			setValidationConfig: function() {
                this.callParent(arguments);
				
				//dateFilledValidator defined in UsrRequestsPageMixin
				this.addColumnValidator("UsrVacationStart", this.dateFilledValidator);
				this.addColumnValidator("UsrVacationEndDate", this.dateFilledValidator);
				
				//dateValidator defined in UsrRequestsPageMixin
				this.addColumnValidator("UsrVacationStart", this.dateValidator);
				this.addColumnValidator("UsrVacationEndDate", this.dateValidator);
            }
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPff3e0694-d646-410f-8099-de916b81c5cd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCategory",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP5b144813-d083-44c2-be99-0a1a58c18c37",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPae79010f-c85d-43c3-95a3-7b7752be428c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrAccount",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPb7b50627-1f9e-43b8-8c19-7f9fdb8c952e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP54ad5025-aa54-4604-904f-90fed6ccb94f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrJobTitle",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP717f7dbc-bf23-4fda-b1e4-919f3ed6552e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDepartment",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabd4ca84b1TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabd4ca84b1TabLabelTabCaption"
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
				"name": "Tabd4ca84b1TabLabelGroup2ec7abc0",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabd4ca84b1TabLabelGroup2ec7abc0GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabd4ca84b1TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabd4ca84b1TabLabelGroup2ec7abc0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING175cddcb-6aa8-41bf-b385-97fdc40881b8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrSubject",
					"enabled": true
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGbb5673e2-97a3-4204-8588-847ace31d829",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrAdditionalInfo",
					"enabled": true
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedOn3d0ea060-c276-4957-8c97-18491544b4c9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIMEdc1b27f7-08bd-4cbf-967c-f90adefdef1f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrDueDate",
					"enabled": false
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrVacationStart",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrVacationStart",
					"enabled": true
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrVacationEndDate",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrVacationEndDate",
					"enabled": true
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP9b05a013-df16-4a84-b7e9-80ed1223f325",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrVacationType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "INTEGERfce28b91-87f5-474e-986e-220b1659dd35",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b"
					},
					"bindTo": "UsrDaysAvailable",
					"enabled": true
				},
				"parentName": "Tabd4ca84b1TabLabelGridLayout5a0eb32b",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "insert",
				"name": "Tab72747079TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "VisaDetailV29c58ce5a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab72747079TabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
