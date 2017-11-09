$(document).ready(function() {
                  //$(".picture").hide();
                  document.getElementById('rewardarea').style.display = "none";
                  document.getElementById('failarea').style.display = "none";
                  
                  var winCounter = 0;
                  var orientationValue = 1;
                  var orientationStrings = ["South West", "North", "South East", "West", "South", "North West", "East", "North East"];
                  var orientations = [225, 0, 135, 270, 180, 315, 90, 45];
                  var accuracy = 20;
                  var alpha = -1;
                  var alphaFeat = [0,0,0,0];
                  var alphaCounter = 0;
                  
                  if(window.DeviceOrientationEvent) {
                    document.getElementById('desktoparea').style.display = "none";
                    window.addEventListener('deviceorientation', function(event) {
                      if(event.webkitCompassHeading) {
                                          alphaFeat[alphaCounter] = Math.floor(event.webkitCompassHeading);

                                        }
                                        else {alphaFeat[alphaCounter] = Math.floor(event.alpha);}

                                        
                                        //Featurevalue can cause problems at North!
                                        var count = 0;
                                        for(var i=0, n=alphaFeat.length; i < n; i++) 
                                         { 
                                            count += alphaFeat[i]; 
                                         }
                                        alpha = count / 6;

                                        alphaCounter = (alphaCounter + 1) % 4;
                                        alphaCounter = (alphaCounter - 360) * (-1);

                                            
                                          }, false);
                  
                  } else {
                    //Show 
                    document.getElementById('desktoparea').style.display = "block";
                  }


                  $("#helpButton").click(function() {
                    document.getElementById('helpButton').style.display = "none";
                    document.getElementById('help').style.display = "block";


                  });

                  $("#noHelp").click(function() {
                    document.getElementById('helpButton').style.display = "block";
                    document.getElementById('help').style.display = "none";


                  });
                  $("#inputSubmit").click(function() {
                    var accValue = Math.floor(document.getElementById("inputAcc").value);
                    if (Number.isInteger(accValue) && accValue >= 4 && accValue <= 360) {
                      accuracy = accValue;
                    }
                    //Either update or reset to old value if input wasn't an integer
                    document.getElementById("inputAcc").value = accuracy;

                  });


                  $("#button").click(function() {
                                     
                                     //hide desktoparea
                                     document.getElementById("desktoparea").style.display = "none";


                                     $("#alphaValue").text(alpha);
                                     
                                     
                                    if(orientationValue==1 && (360 - accuracy < alpha || alpha < accuracy) ||
                                       ((orientations[orientationValue] - accuracy) < alpha && alpha < (orientations[orientationValue] + accuracy) ) ) {
                                                              winCounter++;
                                                              
                                                              orientationValue = Math.floor((Math.random() * 8)); //random new orientation array position 0-8
                                                              $("#direction").text(orientationStrings[orientationValue]); //Set direction text   
                                                              document.getElementById('mainarea').style.display = "none";
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



                                      }, 2000);
                                     
                    });
});
