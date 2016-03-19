<html>
	<meta charset="utf-8"></meta>
	<title><?php echo $_GET["lesson"]; ?></title>
	<body>
		<div><heading><?php echo $_GET["lesson"]; ?> Lesson</heading></div>
		<div id="lesson">Lesson details</div>
	</body>
	<link rel="stylesheet" type="text/css" href="erhsstyle.css"></link>
	<style type="text/css">
		a{
			text-decoration:underline;
		}
		#lesson{
			text-align:left;
		}
	</style>
	
	<script type="text/javascript" src="lessons.js"></script>

	<script type="text/javascript">	
		var lessonDiv=document.getElementById("lesson");
		for(var a=0;a<lessons.length;a++){
			if(lessons[a].name=="<?php echo $_GET['lesson']; ?>"){
				lessonDiv.innerHTML="";
				if(lessons[a].suggested.length!=0){
					lessonDiv.innerHTML+="Suggested Lessons: "+lessonLink(lessons[a].suggested[0]);
					for(var b=1;b<lessons[a].suggested.length;b++){
						lessonDiv.innerHTML+=", "+lessonLink(lessons[a].suggested[b]);
					}
					lessonDiv.innerHTML+="</br></br>";
				}
				for(var b=0;b<lessons[a].text.length;b++){
					lessonDiv.innerHTML+=lessons[a].text[b];
				}
				break;
			}
		}
		function lessonLink(name){
			return "<a href='lesson.php?lesson="+name+"'>"+name+"</a>";
		}
	</script>
<!--
	This is the template code used for all lesson sites
-->
</html>