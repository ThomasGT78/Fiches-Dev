		/****************************
		*	DÉSACTIVER UN ELEMENT	*
		****************************/

//Désactive un élément
$(input).prop(disabled, true);
$('input').attr(disabled,disabled);
//Active un élément
$('input').prop(disabled, false);
$('input').removeAttr(disabled);


		/************************************
		*	COCHER/DÉCOCHER UNE CHECKBOX	*
		************************************/
		
// Un composant simple case à cocher.
<input type="checkbox" name="checkme">Check Me</input>

// Pour afficher si cette case est cochée ou non (retourne true ou false).
$('input:checkbox[name=checkme]').is(':checked');

// Pour cocher une case.
$('input:checkbox[name=checkme]').attr('checked',true);
$("#checkme").attr(checked, checked);
$("#checkme").prop(checked, true);

// Décocher une case à cocher.
$('input:checkbox[name=checkme]').attr('checked',false);
$("#checkme").removeAttr(checked);
$("#checkme").prop(checked, false);