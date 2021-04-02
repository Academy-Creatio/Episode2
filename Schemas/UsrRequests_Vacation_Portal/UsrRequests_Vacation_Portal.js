define("UsrRequests_Vacation_Portal", ["UsrRequestsPageMixin"], function() {
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
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrJobTitle": {
				"3cacbf56-266a-4c73-b693-ae7139be2c94": {
					"uId": "3cacbf56-266a-4c73-b693-ae7139be2c94",
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
				"1228e1e3-bd16-41eb-bda6-bb4958ad115b": {
					"uId": "1228e1e3-bd16-41eb-bda6-bb4958ad115b",
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
				"bdbb531c-0e09-4c46-be24-3391004f17cb": {
					"uId": "bdbb531c-0e09-4c46-be24-3391004f17cb",
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
				},
				"c0161207-5b2f-4cbb-a879-7727b4d66c78": {
					"uId": "c0161207-5b2f-4cbb-a879-7727b4d66c78",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
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
				"9ee90a74-e746-4fae-a235-5010f49881dc": {
					"uId": "9ee90a74-e746-4fae-a235-5010f49881dc",
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
			},
			"UsrSubject": {
				"671674dd-77f6-49be-8009-0bb102067d33": {
					"uId": "671674dd-77f6-49be-8009-0bb102067d33",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
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
			"UsrName": {
				"0a6293bb-48d1-4946-b6c1-17afc05f05fb": {
					"uId": "0a6293bb-48d1-4946-b6c1-17afc05f05fb",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
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
			"UsrAdditionalInfo": {
				"5cfc2c00-fc7e-476d-bfb0-d90b859b18cf": {
					"uId": "5cfc2c00-fc7e-476d-bfb0-d90b859b18cf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
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
			"CreatedOn": {
				"c45b6364-c054-429e-bbde-4bc23de19b3d": {
					"uId": "c45b6364-c054-429e-bbde-4bc23de19b3d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
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
			"UsrDaysAvailable": {
				"01ec028c-cd14-4bb7-ac7e-18125ffb1b8b": {
					"uId": "01ec028c-cd14-4bb7-ac7e-18125ffb1b8b",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
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
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		mixins: {
			UsrRequestsPageMixin: "Terrasoft.UsrRequestsPageMixin",
		},
		methods: {
			onEntityInitialized: function() {
                this.callParent(arguments);
                this.setName(); // defined in UsrRequestsPageMixin
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
				"name": "UsrName2edd0fc4-77cd-4b16-bc80-f15f3d9f594e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCategoryd0235acf-ccae-45dd-8e0b-fc424bdbd210",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCategory"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrType55cfd2cb-741a-4e81-a126-69045961d123",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrType"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrAccount512c6a5e-a2df-4ef4-b2d6-46273850a5c5",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrAccount"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrContact366949fe-88be-402f-8452-c109084d0ad8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrContact"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrJobTitle35eeda6a-fd04-422b-abc9-32bf321963b4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrJobTitle"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrDepartmentcf077fb6-5ba1-4e4b-a2f5-252e31420e1d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDepartment"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tab1e6d79b8TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1e6d79b8TabLabelTabCaption"
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
				"name": "Tab1e6d79b8TabLabelGroup76c644c6",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1e6d79b8TabLabelGroup76c644c6GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab1e6d79b8TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab1e6d79b8TabLabelGroup76c644c6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrVacationStart",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrVacationStart"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrVacationEndDate",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrVacationEndDate"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrVacationTypeaf859f67-9aa6-4b17-8353-2de831f01090",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrVacationType"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrDaysAvailablea0d60461-d3e6-4601-8f59-f57e656a6f70",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrDaysAvailable"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrDueDate79e015d7-4e12-476c-9f14-9f720d435752",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrDueDate"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrSubject34008ffc-b6a2-4d38-95fd-f5c33ff790c1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 3,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrSubject",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrAdditionalInfoa7657919-a143-42ee-8323-9205b9cedfee",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "UsrAdditionalInfo"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CreatedOn05b69a75-1b22-46f9-b189-79ab46fba789",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab1e6d79b8TabLabelGridLayout384d01e5"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "Tab1e6d79b8TabLabelGridLayout384d01e5",
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
			}
		]/**SCHEMA_DIFF*/
	};
});
