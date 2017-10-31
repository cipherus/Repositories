$(document).ready(function() {
                 
                  document.getElementById('rewardarea').style.display = "none";
                  document.getElementById('failarea').style.display = "none";
                  
                  var winCounter = 0;
                  var orientationValue = 1;
                  var orientationStrings = ["South West", "North", "South East", "West", "South", "North West", "East", "North East"];
                  var orientations = [135, 0, 225, 90, 180, 45, 270, 315];
                  var accuracy = 20;
                  var alpha = -1;
                  
                  if(window.DeviceOrientationEvent) {
                    window.addEventListener('deviceorientation', function(event) {
                                
                                          alpha = event.alpha;
                                
                                          
                                            
                                          }, false);
                  
                  }

                  $("#button").click(function() {
                                     
                                     $("#alphaValue").text(alpha);
                                     
                                     
                                    if(orientationValue==1 && (360 - accuracy < alpha || alpha < accuracy) ||
                                       ((orientations[orientationValue] - accuracy) < alpha && alpha < (orientations[orientationValue] + accuracy) ) ) {
                                                             winCounter++;

                                                              document.getElementById('mainarea').style.display = "none";
                                                              orientationValue = Math.floor((Math.random() * 8)); //random new orientation array position 0-8
                                                              $("#direction").text(orientationStrings[orientationValue]); //Set direction text
                                                              document.getElementById('rewardarea').style.display = "block";
                                                              document.getElementById('failarea').style.display = "none";


                                     
                                           }
                                    else {
                                                             winCounter= 0;

                                                              document.getElementById('mainarea').style.display = "none";
                                                              document.getElementById('rewardarea').style.display = "none";
                                                              document.getElementById('failarea').style.display = "block";

                                     
                                                           
                                                            
                                     
                                     
                                          }
                                       window.setTimeout(function() {
                                      $("#winCounter").text(winCounter); //Set wincounter
                              
                                         
                                        
                                       document.getElementById('mainarea').style.display = "block";
                                       document.getElementById('rewardarea').style.display = "none";
                                       document.getElementById('failarea').style.display = "none";



                                      }, 1700);
                                     
                    });
});
