$(function(){var a={el:{fieldsContainers:$("[data-field-span]"),focusableFields:$("input, textarea, select","[data-field-span]")},init:function(){this.focusField(this.el.focusableFields.filter(":focus"));this.events()},focusField:function(b){b.closest("[data-field-span]").addClass("focus")},removeFieldFocus:function(){this.el.fieldsContainers.removeClass("focus")},events:function(){var b=this;b.el.fieldsContainers.click(function(){$(this).find("input, textarea, select").focus()});b.el.focusableFields.focus(function(){b.focusField($(this))});b.el.focusableFields.blur(function(){b.removeFieldFocus()})}};a.init()});