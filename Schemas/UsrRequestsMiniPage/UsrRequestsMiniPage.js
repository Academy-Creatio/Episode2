define("UsrRequestsMiniPage", ["UsrRequestsPageMixin"], function() {
	return {
		entitySchemaName: "UsrRequests",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrVacationType": {
				"5d7ce22b-8dae-4399-8bba-15845d4fe340": {
					"uId": "5d7ce22b-8dae-4399-8bba-15845d4fe340",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrType"
							},
							"rightExpression": {
								"type": 0,
								"value": "57a229dc-a239-4a18-9808-3aac8307dd3a",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrVacationStart": {
				"7ec6c36e-da77-4a25-af31-6313aa824e38": {
					"uId": "7ec6c36e-da77-4a25-af31-6313aa824e38",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrType"
							},
							"rightExpression": {
								"type": 0,
								"value": "57a229dc-a239-4a18-9808-3aac8307dd3a",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrVacationEndDate": {
				"a7fa9fe2-3f41-4a80-be14-070351da0e1d": {
					"uId": "a7fa9fe2-3f41-4a80-be14-070351da0e1d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrType"
							},
							"rightExpression": {
								"type": 0,
								"value": "57a229dc-a239-4a18-9808-3aac8307dd3a",
								"dataValueType": 10
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
			/**
			* @inheritdoc Terrasoft.BasePageV2#onEntityInitialized
			*/
			onEntityInitialized: function() {
                this.callParent(arguments);
				this.getNextNumber();
            },
		          
			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#setValidationConfig
			 * @override
			 */
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
				"operation": "merge",
				"name": "HeaderContainer",
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
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrType495f8a9c-2b51-4543-bb1f-902497487ea8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrType"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrVacationTypef09084b8-dc80-4b71-bc73-4263ee84d34d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrVacationType"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrVacationStarta8f144ab-fe01-45bd-8057-f97e0438420b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrVacationStart"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrVacationEndDate05f87a13-a7a0-458a-adca-5db5519c7da4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrVacationEndDate"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_DIFF*/
	};
});
