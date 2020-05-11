/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3345.0, "minX": 0.0, "maxY": 87757.0, "series": [{"data": [[0.0, 3345.0], [0.1, 3345.0], [0.2, 3345.0], [0.3, 3345.0], [0.4, 3345.0], [0.5, 3345.0], [0.6, 3345.0], [0.7, 3409.0], [0.8, 3409.0], [0.9, 3409.0], [1.0, 3409.0], [1.1, 3409.0], [1.2, 3409.0], [1.3, 3409.0], [1.4, 3462.0], [1.5, 3462.0], [1.6, 3462.0], [1.7, 3462.0], [1.8, 3462.0], [1.9, 3462.0], [2.0, 3462.0], [2.1, 3472.0], [2.2, 3472.0], [2.3, 3472.0], [2.4, 3472.0], [2.5, 3472.0], [2.6, 3472.0], [2.7, 3472.0], [2.8, 3481.0], [2.9, 3481.0], [3.0, 3481.0], [3.1, 3481.0], [3.2, 3481.0], [3.3, 3481.0], [3.4, 3481.0], [3.5, 3512.0], [3.6, 3512.0], [3.7, 3512.0], [3.8, 3512.0], [3.9, 3512.0], [4.0, 3512.0], [4.1, 3512.0], [4.2, 3584.0], [4.3, 3584.0], [4.4, 3584.0], [4.5, 3584.0], [4.6, 3584.0], [4.7, 3584.0], [4.8, 3592.0], [4.9, 3592.0], [5.0, 3592.0], [5.1, 3592.0], [5.2, 3592.0], [5.3, 3592.0], [5.4, 3592.0], [5.5, 3660.0], [5.6, 3660.0], [5.7, 3660.0], [5.8, 3660.0], [5.9, 3660.0], [6.0, 3660.0], [6.1, 3660.0], [6.2, 4168.0], [6.3, 4168.0], [6.4, 4168.0], [6.5, 4168.0], [6.6, 4168.0], [6.7, 4168.0], [6.8, 4168.0], [6.9, 4195.0], [7.0, 4195.0], [7.1, 4195.0], [7.2, 4195.0], [7.3, 4195.0], [7.4, 4195.0], [7.5, 4195.0], [7.6, 4510.0], [7.7, 4510.0], [7.8, 4510.0], [7.9, 4510.0], [8.0, 4510.0], [8.1, 4510.0], [8.2, 4510.0], [8.3, 4547.0], [8.4, 4547.0], [8.5, 4547.0], [8.6, 4547.0], [8.7, 4547.0], [8.8, 4547.0], [8.9, 4547.0], [9.0, 4710.0], [9.1, 4710.0], [9.2, 4710.0], [9.3, 4710.0], [9.4, 4710.0], [9.5, 4710.0], [9.6, 4815.0], [9.7, 4815.0], [9.8, 4815.0], [9.9, 4815.0], [10.0, 4815.0], [10.1, 4815.0], [10.2, 4815.0], [10.3, 5090.0], [10.4, 5090.0], [10.5, 5090.0], [10.6, 5090.0], [10.7, 5090.0], [10.8, 5090.0], [10.9, 5090.0], [11.0, 5118.0], [11.1, 5118.0], [11.2, 5118.0], [11.3, 5118.0], [11.4, 5118.0], [11.5, 5118.0], [11.6, 5118.0], [11.7, 5608.0], [11.8, 5608.0], [11.9, 5608.0], [12.0, 5608.0], [12.1, 5608.0], [12.2, 5608.0], [12.3, 5608.0], [12.4, 5997.0], [12.5, 5997.0], [12.6, 5997.0], [12.7, 5997.0], [12.8, 5997.0], [12.9, 5997.0], [13.0, 5997.0], [13.1, 6037.0], [13.2, 6037.0], [13.3, 6037.0], [13.4, 6037.0], [13.5, 6037.0], [13.6, 6037.0], [13.7, 6076.0], [13.8, 6076.0], [13.9, 6076.0], [14.0, 6076.0], [14.1, 6076.0], [14.2, 6076.0], [14.3, 6076.0], [14.4, 6081.0], [14.5, 6081.0], [14.6, 6081.0], [14.7, 6081.0], [14.8, 6081.0], [14.9, 6081.0], [15.0, 6081.0], [15.1, 6449.0], [15.2, 6449.0], [15.3, 6449.0], [15.4, 6449.0], [15.5, 6449.0], [15.6, 6449.0], [15.7, 6449.0], [15.8, 6549.0], [15.9, 6549.0], [16.0, 6549.0], [16.1, 6549.0], [16.2, 6549.0], [16.3, 6549.0], [16.4, 6549.0], [16.5, 6554.0], [16.6, 6554.0], [16.7, 6554.0], [16.8, 6554.0], [16.9, 6554.0], [17.0, 6554.0], [17.1, 6554.0], [17.2, 6652.0], [17.3, 6652.0], [17.4, 6652.0], [17.5, 6652.0], [17.6, 6652.0], [17.7, 6652.0], [17.8, 6652.0], [17.9, 7078.0], [18.0, 7078.0], [18.1, 7078.0], [18.2, 7078.0], [18.3, 7078.0], [18.4, 7078.0], [18.5, 8947.0], [18.6, 8947.0], [18.7, 8947.0], [18.8, 8947.0], [18.9, 8947.0], [19.0, 8947.0], [19.1, 8947.0], [19.2, 8949.0], [19.3, 8949.0], [19.4, 8949.0], [19.5, 8949.0], [19.6, 8949.0], [19.7, 8949.0], [19.8, 8949.0], [19.9, 9149.0], [20.0, 9149.0], [20.1, 9149.0], [20.2, 9149.0], [20.3, 9149.0], [20.4, 9149.0], [20.5, 9149.0], [20.6, 9295.0], [20.7, 9295.0], [20.8, 9295.0], [20.9, 9295.0], [21.0, 9295.0], [21.1, 9295.0], [21.2, 9295.0], [21.3, 9317.0], [21.4, 9317.0], [21.5, 9317.0], [21.6, 9317.0], [21.7, 9317.0], [21.8, 9317.0], [21.9, 9317.0], [22.0, 9657.0], [22.1, 9657.0], [22.2, 9657.0], [22.3, 9657.0], [22.4, 9657.0], [22.5, 9657.0], [22.6, 9657.0], [22.7, 9662.0], [22.8, 9662.0], [22.9, 9662.0], [23.0, 9662.0], [23.1, 9662.0], [23.2, 9662.0], [23.3, 9707.0], [23.4, 9707.0], [23.5, 9707.0], [23.6, 9707.0], [23.7, 9707.0], [23.8, 9707.0], [23.9, 9707.0], [24.0, 9753.0], [24.1, 9753.0], [24.2, 9753.0], [24.3, 9753.0], [24.4, 9753.0], [24.5, 9753.0], [24.6, 9753.0], [24.7, 10820.0], [24.8, 10820.0], [24.9, 10820.0], [25.0, 10820.0], [25.1, 10820.0], [25.2, 10820.0], [25.3, 10820.0], [25.4, 11888.0], [25.5, 11888.0], [25.6, 11888.0], [25.7, 11888.0], [25.8, 11888.0], [25.9, 11888.0], [26.0, 11888.0], [26.1, 12042.0], [26.2, 12042.0], [26.3, 12042.0], [26.4, 12042.0], [26.5, 12042.0], [26.6, 12042.0], [26.7, 12042.0], [26.8, 12110.0], [26.9, 12110.0], [27.0, 12110.0], [27.1, 12110.0], [27.2, 12110.0], [27.3, 12110.0], [27.4, 12314.0], [27.5, 12314.0], [27.6, 12314.0], [27.7, 12314.0], [27.8, 12314.0], [27.9, 12314.0], [28.0, 12314.0], [28.1, 12728.0], [28.2, 12728.0], [28.3, 12728.0], [28.4, 12728.0], [28.5, 12728.0], [28.6, 12728.0], [28.7, 12728.0], [28.8, 13180.0], [28.9, 13180.0], [29.0, 13180.0], [29.1, 13180.0], [29.2, 13180.0], [29.3, 13180.0], [29.4, 13180.0], [29.5, 13309.0], [29.6, 13309.0], [29.7, 13309.0], [29.8, 13309.0], [29.9, 13309.0], [30.0, 13309.0], [30.1, 13309.0], [30.2, 13435.0], [30.3, 13435.0], [30.4, 13435.0], [30.5, 13435.0], [30.6, 13435.0], [30.7, 13435.0], [30.8, 13435.0], [30.9, 13511.0], [31.0, 13511.0], [31.1, 13511.0], [31.2, 13511.0], [31.3, 13511.0], [31.4, 13511.0], [31.5, 13511.0], [31.6, 14523.0], [31.7, 14523.0], [31.8, 14523.0], [31.9, 14523.0], [32.0, 14523.0], [32.1, 14523.0], [32.2, 15262.0], [32.3, 15262.0], [32.4, 15262.0], [32.5, 15262.0], [32.6, 15262.0], [32.7, 15262.0], [32.8, 15262.0], [32.9, 17310.0], [33.0, 17310.0], [33.1, 17310.0], [33.2, 17310.0], [33.3, 17310.0], [33.4, 17310.0], [33.5, 17310.0], [33.6, 17822.0], [33.7, 17822.0], [33.8, 17822.0], [33.9, 17822.0], [34.0, 17822.0], [34.1, 17822.0], [34.2, 17822.0], [34.3, 19662.0], [34.4, 19662.0], [34.5, 19662.0], [34.6, 19662.0], [34.7, 19662.0], [34.8, 19662.0], [34.9, 19662.0], [35.0, 19828.0], [35.1, 19828.0], [35.2, 19828.0], [35.3, 19828.0], [35.4, 19828.0], [35.5, 19828.0], [35.6, 19828.0], [35.7, 19899.0], [35.8, 19899.0], [35.9, 19899.0], [36.0, 19899.0], [36.1, 19899.0], [36.2, 19899.0], [36.3, 19899.0], [36.4, 20378.0], [36.5, 20378.0], [36.6, 20378.0], [36.7, 20378.0], [36.8, 20378.0], [36.9, 20378.0], [37.0, 20478.0], [37.1, 20478.0], [37.2, 20478.0], [37.3, 20478.0], [37.4, 20478.0], [37.5, 20478.0], [37.6, 20478.0], [37.7, 20480.0], [37.8, 20480.0], [37.9, 20480.0], [38.0, 20480.0], [38.1, 20480.0], [38.2, 20480.0], [38.3, 20480.0], [38.4, 20554.0], [38.5, 20554.0], [38.6, 20554.0], [38.7, 20554.0], [38.8, 20554.0], [38.9, 20554.0], [39.0, 20554.0], [39.1, 20584.0], [39.2, 20584.0], [39.3, 20584.0], [39.4, 20584.0], [39.5, 20584.0], [39.6, 20584.0], [39.7, 20584.0], [39.8, 20665.0], [39.9, 20665.0], [40.0, 20665.0], [40.1, 20665.0], [40.2, 20665.0], [40.3, 20665.0], [40.4, 20665.0], [40.5, 21472.0], [40.6, 21472.0], [40.7, 21472.0], [40.8, 21472.0], [40.9, 21472.0], [41.0, 21472.0], [41.1, 21501.0], [41.2, 21501.0], [41.3, 21501.0], [41.4, 21501.0], [41.5, 21501.0], [41.6, 21501.0], [41.7, 21501.0], [41.8, 21524.0], [41.9, 21524.0], [42.0, 21524.0], [42.1, 21524.0], [42.2, 21524.0], [42.3, 21524.0], [42.4, 21524.0], [42.5, 21631.0], [42.6, 21631.0], [42.7, 21631.0], [42.8, 21631.0], [42.9, 21631.0], [43.0, 21631.0], [43.1, 21631.0], [43.2, 21746.0], [43.3, 21746.0], [43.4, 21746.0], [43.5, 21746.0], [43.6, 21746.0], [43.7, 21746.0], [43.8, 21746.0], [43.9, 22120.0], [44.0, 22120.0], [44.1, 22120.0], [44.2, 22120.0], [44.3, 22120.0], [44.4, 22120.0], [44.5, 22120.0], [44.6, 22400.0], [44.7, 22400.0], [44.8, 22400.0], [44.9, 22400.0], [45.0, 22400.0], [45.1, 22400.0], [45.2, 22400.0], [45.3, 23348.0], [45.4, 23348.0], [45.5, 23348.0], [45.6, 23348.0], [45.7, 23348.0], [45.8, 23348.0], [45.9, 23553.0], [46.0, 23553.0], [46.1, 23553.0], [46.2, 23553.0], [46.3, 23553.0], [46.4, 23553.0], [46.5, 23553.0], [46.6, 24040.0], [46.7, 24040.0], [46.8, 24040.0], [46.9, 24040.0], [47.0, 24040.0], [47.1, 24040.0], [47.2, 24040.0], [47.3, 25059.0], [47.4, 25059.0], [47.5, 25059.0], [47.6, 25059.0], [47.7, 25059.0], [47.8, 25059.0], [47.9, 25059.0], [48.0, 26700.0], [48.1, 26700.0], [48.2, 26700.0], [48.3, 26700.0], [48.4, 26700.0], [48.5, 26700.0], [48.6, 26700.0], [48.7, 27823.0], [48.8, 27823.0], [48.9, 27823.0], [49.0, 27823.0], [49.1, 27823.0], [49.2, 27823.0], [49.3, 27823.0], [49.4, 28373.0], [49.5, 28373.0], [49.6, 28373.0], [49.7, 28373.0], [49.8, 28373.0], [49.9, 28373.0], [50.0, 28373.0], [50.1, 29359.0], [50.2, 29359.0], [50.3, 29359.0], [50.4, 29359.0], [50.5, 29359.0], [50.6, 29359.0], [50.7, 30488.0], [50.8, 30488.0], [50.9, 30488.0], [51.0, 30488.0], [51.1, 30488.0], [51.2, 30488.0], [51.3, 30488.0], [51.4, 32022.0], [51.5, 32022.0], [51.6, 32022.0], [51.7, 32022.0], [51.8, 32022.0], [51.9, 32022.0], [52.0, 32022.0], [52.1, 33148.0], [52.2, 33148.0], [52.3, 33148.0], [52.4, 33148.0], [52.5, 33148.0], [52.6, 33148.0], [52.7, 33148.0], [52.8, 34579.0], [52.9, 34579.0], [53.0, 34579.0], [53.1, 34579.0], [53.2, 34579.0], [53.3, 34579.0], [53.4, 34579.0], [53.5, 35910.0], [53.6, 35910.0], [53.7, 35910.0], [53.8, 35910.0], [53.9, 35910.0], [54.0, 35910.0], [54.1, 35910.0], [54.2, 37241.0], [54.3, 37241.0], [54.4, 37241.0], [54.5, 37241.0], [54.6, 37241.0], [54.7, 37241.0], [54.8, 38569.0], [54.9, 38569.0], [55.0, 38569.0], [55.1, 38569.0], [55.2, 38569.0], [55.3, 38569.0], [55.4, 38569.0], [55.5, 39901.0], [55.6, 39901.0], [55.7, 39901.0], [55.8, 39901.0], [55.9, 39901.0], [56.0, 39901.0], [56.1, 39901.0], [56.2, 41333.0], [56.3, 41333.0], [56.4, 41333.0], [56.5, 41333.0], [56.6, 41333.0], [56.7, 41333.0], [56.8, 41333.0], [56.9, 41358.0], [57.0, 41358.0], [57.1, 41358.0], [57.2, 41358.0], [57.3, 41358.0], [57.4, 41358.0], [57.5, 41358.0], [57.6, 41367.0], [57.7, 41367.0], [57.8, 41367.0], [57.9, 41367.0], [58.0, 41367.0], [58.1, 41367.0], [58.2, 41367.0], [58.3, 41461.0], [58.4, 41461.0], [58.5, 41461.0], [58.6, 41461.0], [58.7, 41461.0], [58.8, 41461.0], [58.9, 41461.0], [59.0, 41469.0], [59.1, 41469.0], [59.2, 41469.0], [59.3, 41469.0], [59.4, 41469.0], [59.5, 41469.0], [59.6, 41502.0], [59.7, 41502.0], [59.8, 41502.0], [59.9, 41502.0], [60.0, 41502.0], [60.1, 41502.0], [60.2, 41502.0], [60.3, 41575.0], [60.4, 41575.0], [60.5, 41575.0], [60.6, 41575.0], [60.7, 41575.0], [60.8, 41575.0], [60.9, 41575.0], [61.0, 41575.0], [61.1, 41575.0], [61.2, 41575.0], [61.3, 41575.0], [61.4, 41575.0], [61.5, 41575.0], [61.6, 41575.0], [61.7, 42355.0], [61.8, 42355.0], [61.9, 42355.0], [62.0, 42355.0], [62.1, 42355.0], [62.2, 42355.0], [62.3, 42355.0], [62.4, 42850.0], [62.5, 42850.0], [62.6, 42850.0], [62.7, 42850.0], [62.8, 42850.0], [62.9, 42850.0], [63.0, 42850.0], [63.1, 43721.0], [63.2, 43721.0], [63.3, 43721.0], [63.4, 43721.0], [63.5, 43721.0], [63.6, 43721.0], [63.7, 43778.0], [63.8, 43778.0], [63.9, 43778.0], [64.0, 43778.0], [64.1, 43778.0], [64.2, 43778.0], [64.3, 43778.0], [64.4, 44543.0], [64.5, 44543.0], [64.6, 44543.0], [64.7, 44543.0], [64.8, 44543.0], [64.9, 44543.0], [65.0, 44543.0], [65.1, 44644.0], [65.2, 44644.0], [65.3, 44644.0], [65.4, 44644.0], [65.5, 44644.0], [65.6, 44644.0], [65.7, 44644.0], [65.8, 44812.0], [65.9, 44812.0], [66.0, 44812.0], [66.1, 44812.0], [66.2, 44812.0], [66.3, 44812.0], [66.4, 44812.0], [66.5, 44845.0], [66.6, 44845.0], [66.7, 44845.0], [66.8, 44845.0], [66.9, 44845.0], [67.0, 44845.0], [67.1, 44845.0], [67.2, 44948.0], [67.3, 44948.0], [67.4, 44948.0], [67.5, 44948.0], [67.6, 44948.0], [67.7, 44948.0], [67.8, 44948.0], [67.9, 44954.0], [68.0, 44954.0], [68.1, 44954.0], [68.2, 44954.0], [68.3, 44954.0], [68.4, 44954.0], [68.5, 45510.0], [68.6, 45510.0], [68.7, 45510.0], [68.8, 45510.0], [68.9, 45510.0], [69.0, 45510.0], [69.1, 45510.0], [69.2, 46057.0], [69.3, 46057.0], [69.4, 46057.0], [69.5, 46057.0], [69.6, 46057.0], [69.7, 46057.0], [69.8, 46057.0], [69.9, 48212.0], [70.0, 48212.0], [70.1, 48212.0], [70.2, 48212.0], [70.3, 48212.0], [70.4, 48212.0], [70.5, 48212.0], [70.6, 48790.0], [70.7, 48790.0], [70.8, 48790.0], [70.9, 48790.0], [71.0, 48790.0], [71.1, 48790.0], [71.2, 48790.0], [71.3, 51040.0], [71.4, 51040.0], [71.5, 51040.0], [71.6, 51040.0], [71.7, 51040.0], [71.8, 51040.0], [71.9, 51040.0], [72.0, 51192.0], [72.1, 51192.0], [72.2, 51192.0], [72.3, 51192.0], [72.4, 51192.0], [72.5, 51192.0], [72.6, 51192.0], [72.7, 53805.0], [72.8, 53805.0], [72.9, 53805.0], [73.0, 53805.0], [73.1, 53805.0], [73.2, 53805.0], [73.3, 53807.0], [73.4, 53807.0], [73.5, 53807.0], [73.6, 53807.0], [73.7, 53807.0], [73.8, 53807.0], [73.9, 53807.0], [74.0, 56564.0], [74.1, 56564.0], [74.2, 56564.0], [74.3, 56564.0], [74.4, 56564.0], [74.5, 56564.0], [74.6, 56564.0], [74.7, 56574.0], [74.8, 56574.0], [74.9, 56574.0], [75.0, 56574.0], [75.1, 56574.0], [75.2, 56574.0], [75.3, 56574.0], [75.4, 59335.0], [75.5, 59335.0], [75.6, 59335.0], [75.7, 59335.0], [75.8, 59335.0], [75.9, 59335.0], [76.0, 59335.0], [76.1, 60253.0], [76.2, 60253.0], [76.3, 60253.0], [76.4, 60253.0], [76.5, 60253.0], [76.6, 60253.0], [76.7, 60253.0], [76.8, 61894.0], [76.9, 61894.0], [77.0, 61894.0], [77.1, 61894.0], [77.2, 61894.0], [77.3, 61894.0], [77.4, 62909.0], [77.5, 62909.0], [77.6, 62909.0], [77.7, 62909.0], [77.8, 62909.0], [77.9, 62909.0], [78.0, 62909.0], [78.1, 64452.0], [78.2, 64452.0], [78.3, 64452.0], [78.4, 64452.0], [78.5, 64452.0], [78.6, 64452.0], [78.7, 64452.0], [78.8, 65575.0], [78.9, 65575.0], [79.0, 65575.0], [79.1, 65575.0], [79.2, 65575.0], [79.3, 65575.0], [79.4, 65575.0], [79.5, 67000.0], [79.6, 67000.0], [79.7, 67000.0], [79.8, 67000.0], [79.9, 67000.0], [80.0, 67000.0], [80.1, 67000.0], [80.2, 68225.0], [80.3, 68225.0], [80.4, 68225.0], [80.5, 68225.0], [80.6, 68225.0], [80.7, 68225.0], [80.8, 68225.0], [80.9, 69662.0], [81.0, 69662.0], [81.1, 69662.0], [81.2, 69662.0], [81.3, 69662.0], [81.4, 69662.0], [81.5, 69662.0], [81.6, 70988.0], [81.7, 70988.0], [81.8, 70988.0], [81.9, 70988.0], [82.0, 70988.0], [82.1, 70988.0], [82.2, 72310.0], [82.3, 72310.0], [82.4, 72310.0], [82.5, 72310.0], [82.6, 72310.0], [82.7, 72310.0], [82.8, 72310.0], [82.9, 73739.0], [83.0, 73739.0], [83.1, 73739.0], [83.2, 73739.0], [83.3, 73739.0], [83.4, 73739.0], [83.5, 73739.0], [83.6, 74976.0], [83.7, 74976.0], [83.8, 74976.0], [83.9, 74976.0], [84.0, 74976.0], [84.1, 74976.0], [84.2, 74976.0], [84.3, 76496.0], [84.4, 76496.0], [84.5, 76496.0], [84.6, 76496.0], [84.7, 76496.0], [84.8, 76496.0], [84.9, 76496.0], [85.0, 77520.0], [85.1, 77520.0], [85.2, 77520.0], [85.3, 77520.0], [85.4, 77520.0], [85.5, 77520.0], [85.6, 77520.0], [85.7, 79249.0], [85.8, 79249.0], [85.9, 79249.0], [86.0, 79249.0], [86.1, 79249.0], [86.2, 79249.0], [86.3, 79249.0], [86.4, 80164.0], [86.5, 80164.0], [86.6, 80164.0], [86.7, 80164.0], [86.8, 80164.0], [86.9, 80164.0], [87.0, 81905.0], [87.1, 81905.0], [87.2, 81905.0], [87.3, 81905.0], [87.4, 81905.0], [87.5, 81905.0], [87.6, 81905.0], [87.7, 82732.0], [87.8, 82732.0], [87.9, 82732.0], [88.0, 82732.0], [88.1, 82732.0], [88.2, 82732.0], [88.3, 82732.0], [88.4, 84666.0], [88.5, 84666.0], [88.6, 84666.0], [88.7, 84666.0], [88.8, 84666.0], [88.9, 84666.0], [89.0, 84666.0], [89.1, 84892.0], [89.2, 84892.0], [89.3, 84892.0], [89.4, 84892.0], [89.5, 84892.0], [89.6, 84892.0], [89.7, 84892.0], [89.8, 84988.0], [89.9, 84988.0], [90.0, 84988.0], [90.1, 84988.0], [90.2, 84988.0], [90.3, 84988.0], [90.4, 84988.0], [90.5, 84992.0], [90.6, 84992.0], [90.7, 84992.0], [90.8, 84992.0], [90.9, 84992.0], [91.0, 84992.0], [91.1, 84993.0], [91.2, 84993.0], [91.3, 84993.0], [91.4, 84993.0], [91.5, 84993.0], [91.6, 84993.0], [91.7, 84993.0], [91.8, 85065.0], [91.9, 85065.0], [92.0, 85065.0], [92.1, 85065.0], [92.2, 85065.0], [92.3, 85065.0], [92.4, 85065.0], [92.5, 85199.0], [92.6, 85199.0], [92.7, 85199.0], [92.8, 85199.0], [92.9, 85199.0], [93.0, 85199.0], [93.1, 85199.0], [93.2, 85272.0], [93.3, 85272.0], [93.4, 85272.0], [93.5, 85272.0], [93.6, 85272.0], [93.7, 85272.0], [93.8, 85272.0], [93.9, 85299.0], [94.0, 85299.0], [94.1, 85299.0], [94.2, 85299.0], [94.3, 85299.0], [94.4, 85299.0], [94.5, 85299.0], [94.6, 86346.0], [94.7, 86346.0], [94.8, 86346.0], [94.9, 86346.0], [95.0, 86346.0], [95.1, 86346.0], [95.2, 86346.0], [95.3, 86420.0], [95.4, 86420.0], [95.5, 86420.0], [95.6, 86420.0], [95.7, 86420.0], [95.8, 86420.0], [95.9, 86429.0], [96.0, 86429.0], [96.1, 86429.0], [96.2, 86429.0], [96.3, 86429.0], [96.4, 86429.0], [96.5, 86429.0], [96.6, 86438.0], [96.7, 86438.0], [96.8, 86438.0], [96.9, 86438.0], [97.0, 86438.0], [97.1, 86438.0], [97.2, 86438.0], [97.3, 86527.0], [97.4, 86527.0], [97.5, 86527.0], [97.6, 86527.0], [97.7, 86527.0], [97.8, 86527.0], [97.9, 86527.0], [98.0, 86529.0], [98.1, 86529.0], [98.2, 86529.0], [98.3, 86529.0], [98.4, 86529.0], [98.5, 86529.0], [98.6, 86529.0], [98.7, 86539.0], [98.8, 86539.0], [98.9, 86539.0], [99.0, 86539.0], [99.1, 86539.0], [99.2, 86539.0], [99.3, 86539.0], [99.4, 87757.0], [99.5, 87757.0], [99.6, 87757.0], [99.7, 87757.0], [99.8, 87757.0], [99.9, 87757.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 3300.0, "maxY": 4.0, "series": [{"data": [[72300.0, 1.0], [77500.0, 1.0], [81900.0, 1.0], [82700.0, 1.0], [85100.0, 1.0], [86300.0, 1.0], [33100.0, 1.0], [34500.0, 1.0], [35900.0, 1.0], [38500.0, 1.0], [39900.0, 1.0], [41300.0, 3.0], [42300.0, 1.0], [41500.0, 3.0], [44500.0, 1.0], [44900.0, 2.0], [43700.0, 2.0], [45500.0, 1.0], [48700.0, 1.0], [51100.0, 1.0], [56500.0, 2.0], [59300.0, 1.0], [62900.0, 1.0], [65500.0, 1.0], [67000.0, 1.0], [68200.0, 1.0], [84600.0, 1.0], [85000.0, 1.0], [3300.0, 1.0], [3400.0, 4.0], [3500.0, 3.0], [3600.0, 1.0], [4100.0, 2.0], [4500.0, 2.0], [70900.0, 1.0], [73700.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [74900.0, 1.0], [5000.0, 1.0], [5100.0, 1.0], [80100.0, 1.0], [84900.0, 3.0], [5600.0, 1.0], [86500.0, 3.0], [87700.0, 1.0], [6000.0, 3.0], [5900.0, 1.0], [6500.0, 2.0], [6600.0, 1.0], [6400.0, 1.0], [7000.0, 1.0], [8900.0, 2.0], [9200.0, 1.0], [9100.0, 1.0], [9300.0, 1.0], [9600.0, 2.0], [9700.0, 2.0], [10800.0, 1.0], [12100.0, 1.0], [12000.0, 1.0], [11800.0, 1.0], [12300.0, 1.0], [12700.0, 1.0], [13100.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [13500.0, 1.0], [14500.0, 1.0], [15200.0, 1.0], [17300.0, 1.0], [17800.0, 1.0], [19800.0, 2.0], [20400.0, 2.0], [20300.0, 1.0], [19600.0, 1.0], [20500.0, 2.0], [21400.0, 1.0], [21500.0, 2.0], [20600.0, 1.0], [22100.0, 1.0], [21700.0, 1.0], [21600.0, 1.0], [22400.0, 1.0], [23300.0, 1.0], [23500.0, 1.0], [24000.0, 1.0], [25000.0, 1.0], [26700.0, 1.0], [28300.0, 1.0], [27800.0, 1.0], [29300.0, 1.0], [30400.0, 1.0], [32000.0, 1.0], [37200.0, 1.0], [41400.0, 2.0], [42800.0, 1.0], [44600.0, 1.0], [44800.0, 2.0], [46000.0, 1.0], [48200.0, 1.0], [51000.0, 1.0], [53800.0, 2.0], [60200.0, 1.0], [61800.0, 1.0], [64400.0, 1.0], [69600.0, 1.0], [76400.0, 1.0], [79200.0, 1.0], [85200.0, 2.0], [84800.0, 1.0], [86400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 87700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 146.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 146.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 146.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.285714285714286, "minX": 1.5891681E12, "maxY": 50.47727272727273, "series": [{"data": [[1.5891681E12, 4.285714285714286], [1.58916828E12, 15.0], [1.58916816E12, 26.133333333333326], [1.58916822E12, 50.47727272727273]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916828E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 10354.733333333334, "minX": 1.0, "maxY": 87757.0, "series": [{"data": [[2.0, 15688.777777777777], [3.0, 86527.0], [4.0, 10354.733333333334], [5.0, 86529.0], [6.0, 86429.0], [7.0, 85299.0], [8.0, 13546.0], [9.0, 85065.0], [10.0, 86346.0], [11.0, 84992.0], [12.0, 86420.0], [13.0, 84993.0], [14.0, 86539.0], [15.0, 84988.0], [16.0, 17703.625], [17.0, 84666.0], [18.0, 82732.0], [19.0, 81905.0], [20.0, 80164.0], [21.0, 79249.0], [22.0, 77520.0], [23.0, 76496.0], [24.0, 74976.0], [25.0, 73739.0], [26.0, 72310.0], [27.0, 70988.0], [28.0, 69662.0], [29.0, 68225.0], [30.0, 67000.0], [31.0, 65575.0], [32.0, 23776.437500000004], [33.0, 62909.0], [35.0, 60253.0], [34.0, 61894.0], [37.0, 56574.0], [36.0, 59335.0], [39.0, 53807.0], [38.0, 56564.0], [41.0, 51192.0], [40.0, 53805.0], [43.0, 48790.0], [42.0, 51040.0], [45.0, 46057.0], [44.0, 48212.0], [47.0, 43721.0], [46.0, 45510.0], [49.0, 43778.0], [48.0, 42850.0], [51.0, 44845.0], [50.0, 41575.0], [53.0, 44954.0], [52.0, 41358.0], [55.0, 44948.0], [54.0, 41502.0], [57.0, 44812.0], [56.0, 41469.0], [59.0, 44644.0], [58.0, 41461.0], [61.0, 44543.0], [60.0, 41575.0], [63.0, 42355.0], [62.0, 41367.0], [64.0, 31382.8125], [1.0, 87757.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[27.068493150684926, 36464.7397260274]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 145.6, "minX": 1.5891681E12, "maxY": 47371.1, "series": [{"data": [[1.5891681E12, 145.6], [1.58916828E12, 150.8], [1.58916816E12, 234.0], [1.58916822E12, 228.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5891681E12, 29474.733333333334], [1.58916828E12, 30528.316666666666], [1.58916816E12, 47371.1], [1.58916822E12, 46319.01666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916828E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5718.714285714285, "minX": 1.5891681E12, "maxY": 81597.13793103446, "series": [{"data": [[1.5891681E12, 5718.714285714285], [1.58916828E12, 81597.13793103446], [1.58916816E12, 16891.888888888887], [1.58916822E12, 46301.72727272727]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916828E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5718.642857142857, "minX": 1.5891681E12, "maxY": 81597.13793103446, "series": [{"data": [[1.5891681E12, 5718.642857142857], [1.58916828E12, 81597.13793103446], [1.58916816E12, 16891.777777777777], [1.58916822E12, 46301.659090909074]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916828E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2.333333333333334, "minX": 1.5891681E12, "maxY": 3.454545454545455, "series": [{"data": [[1.5891681E12, 2.392857142857143], [1.58916828E12, 3.4482758620689657], [1.58916816E12, 2.333333333333334], [1.58916822E12, 3.454545454545455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916828E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3345.0, "minX": 1.5891681E12, "maxY": 87757.0, "series": [{"data": [[1.5891681E12, 28373.0], [1.58916828E12, 87757.0], [1.58916816E12, 27823.0], [1.58916822E12, 67000.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5891681E12, 3345.0], [1.58916828E12, 68225.0], [1.58916816E12, 8947.0], [1.58916822E12, 29359.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5891681E12, 6694.6], [1.58916828E12, 86529.0], [1.58916816E12, 23747.8], [1.58916822E12, 62401.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5891681E12, 28373.0], [1.58916828E12, 87757.0], [1.58916816E12, 27823.0], [1.58916822E12, 67000.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5891681E12, 18790.24999999994], [1.58916828E12, 87148.0], [1.58916816E12, 26207.699999999993], [1.58916822E12, 65294.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916828E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 25879.5, "minX": 1.0, "maxY": 44160.5, "series": [{"data": [[1.0, 25879.5], [2.0, 44160.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 25879.5, "minX": 1.0, "maxY": 44160.5, "series": [{"data": [[1.0, 25879.5], [2.0, 44160.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58916804E12, "maxY": 1.6833333333333333, "series": [{"data": [[1.5891681E12, 0.5833333333333334], [1.58916816E12, 1.6833333333333333], [1.58916822E12, 0.15], [1.58916804E12, 0.016666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916822E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.5891681E12, "maxY": 0.75, "series": [{"data": [[1.5891681E12, 0.4666666666666667], [1.58916828E12, 0.48333333333333334], [1.58916816E12, 0.75], [1.58916822E12, 0.7333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58916828E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.5891681E12, "maxY": 0.75, "series": [{"data": [[1.5891681E12, 0.4666666666666667], [1.58916828E12, 0.48333333333333334], [1.58916816E12, 0.75], [1.58916822E12, 0.7333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916828E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.5891681E12, "maxY": 0.75, "series": [{"data": [[1.5891681E12, 0.4666666666666667], [1.58916828E12, 0.48333333333333334], [1.58916816E12, 0.75], [1.58916822E12, 0.7333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58916828E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

