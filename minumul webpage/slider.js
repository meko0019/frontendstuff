// With JQuery
$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
// Instantiate a slider
var mySlider = new Slider("input.slider", {
	// initial options object
});

// Call a method on the slider
var value = mySlider.getValue();

// For non-getter methods, you can chain together commands
mySlider
	.setValue(5)
	.setValue(7);
// Without JQuery
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});