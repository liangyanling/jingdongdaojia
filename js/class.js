angular.module("myApp",[])
.controller("con",function($scope){
	var list=[
	{list1:"水果蔬菜"},
	{list1:"肉禽蛋奶"},
	{list1:"冷热速食"},
	{list1:"休闲食品"},
	{list1:"酒水饮料"},
	{list1:"粮油调味"},
	{list1:"清洁日化"},
	{list1:"家居用品"},
	{list1:"鲜花蛋糕"},
	{list1:"医药健康"},
	{list1:"上门服务"
	}];
	var content=[
	{
		title1:"水果",
		/*title2:"蔬菜",*/
		content1:[
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"}
		],
		content2:[
		{src:"img/5667d3d3N2b7b06d7.jpg",text:"蔬菜"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"},
		{src:"img/5667ccd2N0450c91b.jpg",text:"苹果"}
		]
	}
	]

	$scope.tabNum=0;
	$scope.listList=list;
	console.log(list);
	$scope.applayList=content;
	
	$scope.showTab=function($index){
		$scope.tabNum=this.$index;
	}
	

})
       
 

