$(document).ready(function(){if($(".quicksearch tbody tr").length>0){var b=$(".quicksearch"),a=b.data("quicksearch")=="no_focus"?"":"autoselect",d=b.data("label")?b.data("label"):"Set me with data-label";$(".quicksearch tbody tr").quicksearch({attached:".quicksearch",position:"before",labelText:d,inputText:"",inputClass:a,delay:300})}$(".ajax_confirm").click(function(){var e=confirm($(this).data("confirm_message"));return e});$(".ajax_hide_items").click(function(){$(".items").hide("slow")});$(".toggle_me").hide();$(".toggle_link").click(function(f){$(this).next(".toggle_me").toggle("slow");$(this).toggleClass("current").focus()});$(".ajax_filter_by_me").click(function(){var e=$(this).html().trim(),f=$(".quicksearch input");f.val(e);f.focus()});$(".autoselect").focus().select();$(".tablesorter").tablesorter();$("a.edit").focusin(function(){$(this).closest("tr").addClass("item_hover")}).focusout(function(){$(this).closest("tr").removeClass("item_hover")}).click(function(){$(this).closest("tr").removeClass("item_hover")});$(".ajax_item").click(function(){window.location.href=$(this).find("a").attr("href")});$(".flash.notice").parent().addClass("notice");$(".edit_bulk").click(function(h){h.preventDefault();h.stopPropagation();var g=$(this).closest("tr"),f="/admin/bulks/"+h.target.dataset.id;$.ajax({type:"GET",url:f,beforeSend:function(){g.html('<td colspan="6" class="loading"><img src="/media/loading.gif" alt="Cargando..." /></td>')},success:function(e){g.html(e);$("[autofocus]").focus().select()},error:function(){$("#ajax_panel").html('<p class="error"><strong>Oops!</strong> Proba denuevo.</p>')}})});$("form").on("keyup","select[name=b_status]",function(f){if(f.keyCode==13){$(this).closest("form").submit()}});$("#ajax_label_selector").bind("keypress",function(f){if(f.keyCode===13){return c()}});function c(){var e=$("#ajax_label_selector").val();if(e!==""){$("#prod_list_selector").toggle("slow");$("#finish_packaging").toggle("slow");$("#ajax_selected_label").val(e.trim());$("#product_selector").focus()}return false}$(".ajax_product_selector").click(function(){$("#product_selector").val($(this).find("td").html().trim());$("#product_selector").closest("form").submit()});$(".ajax_void_item").click(function(k){k.preventDefault();k.stopPropagation();var h=confirm($(this).data("confirm_message"));if(h==false){return false}var j=$(".ajax_response");var f=$(this).closest("form").attr("action");var g=$(this).siblings("input[name=csrf]").attr("value");var i=$(this).siblings("input[name=i_id]").attr("value");$.ajax({type:"POST",url:f,data:{csrf:g},beforeSend:function(){j.html('<div class="loading"><img src="/media/loading.gif" alt="Cargando..." /></div>')},success:function(o){$(".flash").hide("slow");j.html(o);var n=$("td:contains("+i+")");n.parent("tr").hide("slow");var l=n.closest("table").find(".counter");var e=l.html().trim();var m=parseInt(e,10);l.html(e.replace(m,m-1));$("[autofocus]").focus().select()},error:function(){j.html('<p class="error"><strong>Oops!</strong> Proba denuevo.</p>')}})})});