
new Chartist.Line('#views-graphic', {
	
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  series: [
  [5,9,7,8,5,3,5,4,10,15,5,9,5,3,2,8, 5,3,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
}, {
  low: 0,
  showArea: true,
  fullWidth: true,
  distributeSeries: true,
	plugins: [
		Chartist.plugins.tooltip()
	]
});