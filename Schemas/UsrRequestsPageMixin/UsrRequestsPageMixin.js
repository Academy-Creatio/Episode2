 define("UsrRequestsPageMixin", [], function() {
	/**
	 * @class Terrasoft.configuration.mixins.PartnersOwnerMixin
	 * Mixin represents methods for partners owners.
	 */
	Ext.define("Terrasoft.configuration.mixins.UsrRequestsPageMixin", {
		alternateClassName: "Terrasoft.UsrRequestsPageMixin",

		onEntityInitialized: function() {
                this.callParent(arguments);
            },
		
		
		setName: function(){
			if (this.isAddMode() || this.isCopyMode()) {
				this.getIncrementCode(function(response) {
                	this.set("UsrName", response);
                });
			}
		},
		
		getNextNumber: function(){
			var scope = this;
            if (this.isAddMode() || this.isCopyMode()) {
				var data = {
					sysSettingName: this.entitySchemaName + "LastNumber",
					sysSettingMaskName: this.entitySchemaName + "CodeMask"
				};
				var config = {
					serviceName: "SysSettingsService",
					methodName: "GetIncrementValueVsMask",
					data: data
				};
				this.callService(config, function(response) {
					this.$MiniPageHeaderCaption = response.GetIncrementValueVsMaskResult;
					this.set("UsrName", response.GetIncrementValueVsMaskResult);
				}, scope || this);
			}
		},
		/**
			* @see {@link https://academy.creatio.com/docs/developer/elements_and_components/basic_interface_elements/field#case-1918|Academy}
			*/
		dateValidator: function() {
			// Variable for storing a validation error message.
			var invalidMessage = "";
			var typeId = this.$UsrType.value;
			if(typeId!=="57a229dc-a239-4a18-9808-3aac8307dd3a"){
				return {
					// Validation error message.
					invalidMessage: invalidMessage
				};
			}
			// Checking values in the [UsrVacationEndDate] and [UsrVacationStart] columns.
			if (this.$UsrVacationEndDate < this.$UsrVacationStart) {
				// If the value of the [UsrVacationEndDate] column is less than the value
				// of the [UsrVacationStart] column a value of the localizable string is
				// placed into the variable along with the validation error message
				// in the invalidMessage variable.
				invalidMessage = this.get("Resources.Strings.InvalidDateMessage");
			}
			// Object whose properties contain validation error messages.
			// If the validation is successful, empty strings are returned to the
			// object.
			return {
				// Validation error message.
				invalidMessage: invalidMessage
			};
		},

		dateFilledValidator: function(){
			var colName = arguments[1].name;
			var invalidMessage = "";

			var typeId = this.$UsrType.value;
			if(typeId!=="57a229dc-a239-4a18-9808-3aac8307dd3a"){
				return {
					// Validation error message.
					invalidMessage: invalidMessage
				};
			}


			if(!this.get(colName)){
				invalidMessage = this.get("Resources.Strings.DateEmptyError");
			}
			return {
				// Validation error message.
				invalidMessage: invalidMessage
			};
		},

	});
	 return Ext.create("Terrasoft.UsrRequestsPageMixin")
});
