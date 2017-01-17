$(document).ready(function() {
                  $(".picture").hide();
                  
                  var winCounter = 0;
                  var ocounter = 1;
                  var orientationStrings = ["South West", "North", "South East", "West", "South", "North West", "East", "North East"];
                  var orientations = [135, 0, 225, 90, 180, 45, 270, 315];
                  var accuracy = 20;
                  var alpha = -1;
                  function waitforalpha(oldAlpha) {
                    if(alpha == oldAlpha) {
                        waitforalpha(oldAlpha);
                        }
                  }

                  
                  $("#button").click(function() {
                                     
                                    
                                     
                                  
                                     var oldAlpha = alpha % 360;
                                     
                                     if(window.DeviceOrientationEvent) {
                                        window.addEventListener('deviceorientation', function(event) {
                                                alpha = event.alpha;
                                                }, false);
                                     
                                     }
                                     
                                     waitforalpha(oldAlpha);
                                     
                                     $("#alphaValue").text(alpha);
                                     
                                     
                                    if(ocounter==1 && (360 - accuracy < alpha || alpha < accuracy) ||
                                       ((orientations[ocounter] - accuracy) < alpha && alpha < (orientations[ocounter] + accuracy) ) ) {
                                                             winCounter++;
                                                             $("#winCounter").text(winCounter);
                                                             ocounter++;
                                                             if (ocounter > 7) { ocounter = 0;};
                                                             $("#direction").text(orientationStrings[ocounter]);
                                                             
                                                             $("#unicornreward").attr("src" , "unicornreward.gif");
                                                             $("#unicornreward").fadeIn(250, function() {
                                                                                        $("#unicornreward").delay(1900);
                                                                                        $("#unicornreward").fadeOut(250);
                                                                  
                                                                                        });
                                                             $("#unicornreward").attr("src" , "unicornreward.gif");
                                     
                                     
                                           }
                                    else {
                                                             winCounter= 0;
                                                             $("#winCounter").text(winCounter);
                                     
                                                             $("#unicornreward").attr("src" , "horsefail.gif");
                                                             $("#unicornreward").fadeIn(300, function() {
                                                                                        $("#unicornreward").delay(1900);
                                                                                        $("#unicornreward").fadeOut(250);
                                                                                        
                                                                                        });
                                                             $("#unicornreward").attr("src" , "horsefail.gif");
                                                            
                                          }
                    });
});
