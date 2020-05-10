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
        data: {"result": {"minY": 5595.0, "minX": 0.0, "maxY": 16792.0, "series": [{"data": [[0.0, 5595.0], [0.1, 5595.0], [0.2, 5595.0], [0.3, 5595.0], [0.4, 5595.0], [0.5, 5595.0], [0.6, 6035.0], [0.7, 6035.0], [0.8, 6035.0], [0.9, 6035.0], [1.0, 6035.0], [1.1, 6035.0], [1.2, 6035.0], [1.3, 6035.0], [1.4, 6035.0], [1.5, 6035.0], [1.6, 6035.0], [1.7, 6035.0], [1.8, 6716.0], [1.9, 6716.0], [2.0, 6716.0], [2.1, 6716.0], [2.2, 6716.0], [2.3, 6716.0], [2.4, 6748.0], [2.5, 6748.0], [2.6, 6748.0], [2.7, 6748.0], [2.8, 6748.0], [2.9, 6748.0], [3.0, 6857.0], [3.1, 6857.0], [3.2, 6857.0], [3.3, 6857.0], [3.4, 6857.0], [3.5, 7881.0], [3.6, 7881.0], [3.7, 7881.0], [3.8, 7881.0], [3.9, 7881.0], [4.0, 7881.0], [4.1, 7881.0], [4.2, 7881.0], [4.3, 7881.0], [4.4, 7881.0], [4.5, 7881.0], [4.6, 7881.0], [4.7, 7981.0], [4.8, 7981.0], [4.9, 7981.0], [5.0, 7981.0], [5.1, 7981.0], [5.2, 7981.0], [5.3, 8027.0], [5.4, 8027.0], [5.5, 8027.0], [5.6, 8027.0], [5.7, 8027.0], [5.8, 8027.0], [5.9, 8088.0], [6.0, 8088.0], [6.1, 8088.0], [6.2, 8088.0], [6.3, 8088.0], [6.4, 8088.0], [6.5, 8088.0], [6.6, 8088.0], [6.7, 8088.0], [6.8, 8088.0], [6.9, 8088.0], [7.0, 8094.0], [7.1, 8094.0], [7.2, 8094.0], [7.3, 8094.0], [7.4, 8094.0], [7.5, 8094.0], [7.6, 8191.0], [7.7, 8191.0], [7.8, 8191.0], [7.9, 8191.0], [8.0, 8191.0], [8.1, 8191.0], [8.2, 8191.0], [8.3, 8191.0], [8.4, 8191.0], [8.5, 8191.0], [8.6, 8191.0], [8.7, 8191.0], [8.8, 8235.0], [8.9, 8235.0], [9.0, 8235.0], [9.1, 8235.0], [9.2, 8235.0], [9.3, 8235.0], [9.4, 8236.0], [9.5, 8236.0], [9.6, 8236.0], [9.7, 8236.0], [9.8, 8236.0], [9.9, 8247.0], [10.0, 8247.0], [10.1, 8247.0], [10.2, 8247.0], [10.3, 8247.0], [10.4, 8247.0], [10.5, 8247.0], [10.6, 8247.0], [10.7, 8247.0], [10.8, 8247.0], [10.9, 8247.0], [11.0, 8247.0], [11.1, 8297.0], [11.2, 8297.0], [11.3, 8297.0], [11.4, 8297.0], [11.5, 8297.0], [11.6, 8297.0], [11.7, 8303.0], [11.8, 8303.0], [11.9, 8303.0], [12.0, 8303.0], [12.1, 8303.0], [12.2, 8303.0], [12.3, 8316.0], [12.4, 8316.0], [12.5, 8316.0], [12.6, 8316.0], [12.7, 8316.0], [12.8, 8316.0], [12.9, 8316.0], [13.0, 8316.0], [13.1, 8316.0], [13.2, 8316.0], [13.3, 8316.0], [13.4, 8505.0], [13.5, 8505.0], [13.6, 8505.0], [13.7, 8505.0], [13.8, 8505.0], [13.9, 8505.0], [14.0, 8506.0], [14.1, 8506.0], [14.2, 8506.0], [14.3, 8506.0], [14.4, 8506.0], [14.5, 8506.0], [14.6, 8605.0], [14.7, 8605.0], [14.8, 8605.0], [14.9, 8605.0], [15.0, 8605.0], [15.1, 8605.0], [15.2, 8707.0], [15.3, 8707.0], [15.4, 8707.0], [15.5, 8707.0], [15.6, 8707.0], [15.7, 9114.0], [15.8, 9114.0], [15.9, 9114.0], [16.0, 9114.0], [16.1, 9114.0], [16.2, 9114.0], [16.3, 9116.0], [16.4, 9116.0], [16.5, 9116.0], [16.6, 9116.0], [16.7, 9116.0], [16.8, 9116.0], [16.9, 9118.0], [17.0, 9118.0], [17.1, 9118.0], [17.2, 9118.0], [17.3, 9118.0], [17.4, 9118.0], [17.5, 9118.0], [17.6, 9118.0], [17.7, 9118.0], [17.8, 9118.0], [17.9, 9118.0], [18.0, 9118.0], [18.1, 9120.0], [18.2, 9120.0], [18.3, 9120.0], [18.4, 9120.0], [18.5, 9120.0], [18.6, 9120.0], [18.7, 9314.0], [18.8, 9314.0], [18.9, 9314.0], [19.0, 9314.0], [19.1, 9314.0], [19.2, 9355.0], [19.3, 9355.0], [19.4, 9355.0], [19.5, 9355.0], [19.6, 9355.0], [19.7, 9355.0], [19.8, 9610.0], [19.9, 9610.0], [20.0, 9610.0], [20.1, 9610.0], [20.2, 9610.0], [20.3, 9610.0], [20.4, 9644.0], [20.5, 9644.0], [20.6, 9644.0], [20.7, 9644.0], [20.8, 9644.0], [20.9, 9644.0], [21.0, 9674.0], [21.1, 9674.0], [21.2, 9674.0], [21.3, 9674.0], [21.4, 9674.0], [21.5, 9674.0], [21.6, 9726.0], [21.7, 9726.0], [21.8, 9726.0], [21.9, 9726.0], [22.0, 9726.0], [22.1, 9727.0], [22.2, 9727.0], [22.3, 9727.0], [22.4, 9727.0], [22.5, 9727.0], [22.6, 9727.0], [22.7, 9730.0], [22.8, 9730.0], [22.9, 9730.0], [23.0, 9730.0], [23.1, 9730.0], [23.2, 9730.0], [23.3, 9933.0], [23.4, 9933.0], [23.5, 9933.0], [23.6, 9933.0], [23.7, 9933.0], [23.8, 9933.0], [23.9, 9933.0], [24.0, 9933.0], [24.1, 9933.0], [24.2, 9933.0], [24.3, 9933.0], [24.4, 9933.0], [24.5, 9934.0], [24.6, 9934.0], [24.7, 9934.0], [24.8, 9934.0], [24.9, 9934.0], [25.0, 9934.0], [25.1, 9934.0], [25.2, 9934.0], [25.3, 9934.0], [25.4, 9934.0], [25.5, 9934.0], [25.6, 10032.0], [25.7, 10032.0], [25.8, 10032.0], [25.9, 10032.0], [26.0, 10032.0], [26.1, 10032.0], [26.2, 10033.0], [26.3, 10033.0], [26.4, 10033.0], [26.5, 10033.0], [26.6, 10033.0], [26.7, 10033.0], [26.8, 10036.0], [26.9, 10036.0], [27.0, 10036.0], [27.1, 10036.0], [27.2, 10036.0], [27.3, 10036.0], [27.4, 10036.0], [27.5, 10036.0], [27.6, 10036.0], [27.7, 10036.0], [27.8, 10036.0], [27.9, 10036.0], [28.0, 10058.0], [28.1, 10058.0], [28.2, 10058.0], [28.3, 10058.0], [28.4, 10058.0], [28.5, 10059.0], [28.6, 10059.0], [28.7, 10059.0], [28.8, 10059.0], [28.9, 10059.0], [29.0, 10059.0], [29.1, 10137.0], [29.2, 10137.0], [29.3, 10137.0], [29.4, 10137.0], [29.5, 10137.0], [29.6, 10137.0], [29.7, 10139.0], [29.8, 10139.0], [29.9, 10139.0], [30.0, 10139.0], [30.1, 10139.0], [30.2, 10139.0], [30.3, 10141.0], [30.4, 10141.0], [30.5, 10141.0], [30.6, 10141.0], [30.7, 10141.0], [30.8, 10141.0], [30.9, 10141.0], [31.0, 10141.0], [31.1, 10141.0], [31.2, 10141.0], [31.3, 10141.0], [31.4, 10142.0], [31.5, 10142.0], [31.6, 10142.0], [31.7, 10142.0], [31.8, 10142.0], [31.9, 10142.0], [32.0, 10142.0], [32.1, 10142.0], [32.2, 10142.0], [32.3, 10142.0], [32.4, 10142.0], [32.5, 10142.0], [32.6, 10163.0], [32.7, 10163.0], [32.8, 10163.0], [32.9, 10163.0], [33.0, 10163.0], [33.1, 10163.0], [33.2, 10163.0], [33.3, 10163.0], [33.4, 10163.0], [33.5, 10163.0], [33.6, 10163.0], [33.7, 10163.0], [33.8, 10165.0], [33.9, 10165.0], [34.0, 10165.0], [34.1, 10165.0], [34.2, 10165.0], [34.3, 10165.0], [34.4, 10180.0], [34.5, 10180.0], [34.6, 10180.0], [34.7, 10180.0], [34.8, 10180.0], [34.9, 10181.0], [35.0, 10181.0], [35.1, 10181.0], [35.2, 10181.0], [35.3, 10181.0], [35.4, 10181.0], [35.5, 10188.0], [35.6, 10188.0], [35.7, 10188.0], [35.8, 10188.0], [35.9, 10188.0], [36.0, 10188.0], [36.1, 10189.0], [36.2, 10189.0], [36.3, 10189.0], [36.4, 10189.0], [36.5, 10189.0], [36.6, 10189.0], [36.7, 10239.0], [36.8, 10239.0], [36.9, 10239.0], [37.0, 10239.0], [37.1, 10239.0], [37.2, 10239.0], [37.3, 10295.0], [37.4, 10295.0], [37.5, 10295.0], [37.6, 10295.0], [37.7, 10295.0], [37.8, 10295.0], [37.9, 10295.0], [38.0, 10295.0], [38.1, 10295.0], [38.2, 10295.0], [38.3, 10295.0], [38.4, 10333.0], [38.5, 10333.0], [38.6, 10333.0], [38.7, 10333.0], [38.8, 10333.0], [38.9, 10333.0], [39.0, 10334.0], [39.1, 10334.0], [39.2, 10334.0], [39.3, 10334.0], [39.4, 10334.0], [39.5, 10334.0], [39.6, 10339.0], [39.7, 10339.0], [39.8, 10339.0], [39.9, 10339.0], [40.0, 10339.0], [40.1, 10339.0], [40.2, 10340.0], [40.3, 10340.0], [40.4, 10340.0], [40.5, 10340.0], [40.6, 10340.0], [40.7, 10343.0], [40.8, 10343.0], [40.9, 10343.0], [41.0, 10343.0], [41.1, 10343.0], [41.2, 10343.0], [41.3, 10344.0], [41.4, 10344.0], [41.5, 10344.0], [41.6, 10344.0], [41.7, 10344.0], [41.8, 10344.0], [41.9, 10955.0], [42.0, 10955.0], [42.1, 10955.0], [42.2, 10955.0], [42.3, 10955.0], [42.4, 10955.0], [42.5, 11774.0], [42.6, 11774.0], [42.7, 11774.0], [42.8, 11774.0], [42.9, 11774.0], [43.0, 11774.0], [43.1, 11774.0], [43.2, 11774.0], [43.3, 11774.0], [43.4, 11774.0], [43.5, 11774.0], [43.6, 11774.0], [43.7, 11879.0], [43.8, 11879.0], [43.9, 11879.0], [44.0, 11879.0], [44.1, 11879.0], [44.2, 11879.0], [44.3, 11879.0], [44.4, 11879.0], [44.5, 11879.0], [44.6, 11879.0], [44.7, 11879.0], [44.8, 11883.0], [44.9, 11883.0], [45.0, 11883.0], [45.1, 11883.0], [45.2, 11883.0], [45.3, 11883.0], [45.4, 11883.0], [45.5, 11883.0], [45.6, 11883.0], [45.7, 11883.0], [45.8, 11883.0], [45.9, 11883.0], [46.0, 11886.0], [46.1, 11886.0], [46.2, 11886.0], [46.3, 11886.0], [46.4, 11886.0], [46.5, 11886.0], [46.6, 11886.0], [46.7, 11886.0], [46.8, 11886.0], [46.9, 11886.0], [47.0, 11886.0], [47.1, 11973.0], [47.2, 11973.0], [47.3, 11973.0], [47.4, 11973.0], [47.5, 11973.0], [47.6, 11973.0], [47.7, 11973.0], [47.8, 11973.0], [47.9, 11973.0], [48.0, 11973.0], [48.1, 11973.0], [48.2, 11973.0], [48.3, 11978.0], [48.4, 11978.0], [48.5, 11978.0], [48.6, 11978.0], [48.7, 11978.0], [48.8, 11978.0], [48.9, 11978.0], [49.0, 11978.0], [49.1, 11978.0], [49.2, 11978.0], [49.3, 11978.0], [49.4, 11978.0], [49.5, 11978.0], [49.6, 11978.0], [49.7, 11978.0], [49.8, 11978.0], [49.9, 11978.0], [50.0, 11978.0], [50.1, 11979.0], [50.2, 11979.0], [50.3, 11979.0], [50.4, 11979.0], [50.5, 11979.0], [50.6, 11979.0], [50.7, 11979.0], [50.8, 11979.0], [50.9, 11979.0], [51.0, 11979.0], [51.1, 11979.0], [51.2, 11979.0], [51.3, 11979.0], [51.4, 11979.0], [51.5, 11979.0], [51.6, 11979.0], [51.7, 11979.0], [51.8, 11980.0], [51.9, 11980.0], [52.0, 11980.0], [52.1, 11980.0], [52.2, 11980.0], [52.3, 11980.0], [52.4, 11980.0], [52.5, 11980.0], [52.6, 11980.0], [52.7, 11980.0], [52.8, 11980.0], [52.9, 11980.0], [53.0, 11980.0], [53.1, 11980.0], [53.2, 11980.0], [53.3, 11980.0], [53.4, 11980.0], [53.5, 11980.0], [53.6, 11980.0], [53.7, 11980.0], [53.8, 11980.0], [53.9, 11980.0], [54.0, 11980.0], [54.1, 12078.0], [54.2, 12078.0], [54.3, 12078.0], [54.4, 12078.0], [54.5, 12078.0], [54.6, 12078.0], [54.7, 12078.0], [54.8, 12078.0], [54.9, 12078.0], [55.0, 12078.0], [55.1, 12078.0], [55.2, 12078.0], [55.3, 12080.0], [55.4, 12080.0], [55.5, 12080.0], [55.6, 12080.0], [55.7, 12080.0], [55.8, 12080.0], [55.9, 12081.0], [56.0, 12081.0], [56.1, 12081.0], [56.2, 12081.0], [56.3, 12081.0], [56.4, 12308.0], [56.5, 12308.0], [56.6, 12308.0], [56.7, 12308.0], [56.8, 12308.0], [56.9, 12308.0], [57.0, 12311.0], [57.1, 12311.0], [57.2, 12311.0], [57.3, 12311.0], [57.4, 12311.0], [57.5, 12311.0], [57.6, 12483.0], [57.7, 12483.0], [57.8, 12483.0], [57.9, 12483.0], [58.0, 12483.0], [58.1, 12483.0], [58.2, 12484.0], [58.3, 12484.0], [58.4, 12484.0], [58.5, 12484.0], [58.6, 12484.0], [58.7, 12484.0], [58.8, 12704.0], [58.9, 12704.0], [59.0, 12704.0], [59.1, 12704.0], [59.2, 12704.0], [59.3, 12704.0], [59.4, 12705.0], [59.5, 12705.0], [59.6, 12705.0], [59.7, 12705.0], [59.8, 12705.0], [59.9, 12799.0], [60.0, 12799.0], [60.1, 12799.0], [60.2, 12799.0], [60.3, 12799.0], [60.4, 12799.0], [60.5, 12799.0], [60.6, 12799.0], [60.7, 12799.0], [60.8, 12799.0], [60.9, 12799.0], [61.0, 12799.0], [61.1, 12803.0], [61.2, 12803.0], [61.3, 12803.0], [61.4, 12803.0], [61.5, 12803.0], [61.6, 12803.0], [61.7, 12803.0], [61.8, 12803.0], [61.9, 12803.0], [62.0, 12803.0], [62.1, 12803.0], [62.2, 12803.0], [62.3, 12846.0], [62.4, 12846.0], [62.5, 12846.0], [62.6, 12846.0], [62.7, 12846.0], [62.8, 12846.0], [62.9, 12846.0], [63.0, 12846.0], [63.1, 12846.0], [63.2, 12846.0], [63.3, 12846.0], [63.4, 12903.0], [63.5, 12903.0], [63.6, 12903.0], [63.7, 12903.0], [63.8, 12903.0], [63.9, 12903.0], [64.0, 12903.0], [64.1, 12903.0], [64.2, 12903.0], [64.3, 12903.0], [64.4, 12903.0], [64.5, 12903.0], [64.6, 12908.0], [64.7, 12908.0], [64.8, 12908.0], [64.9, 12908.0], [65.0, 12908.0], [65.1, 12908.0], [65.2, 12954.0], [65.3, 12954.0], [65.4, 12954.0], [65.5, 12954.0], [65.6, 12954.0], [65.7, 12955.0], [65.8, 12955.0], [65.9, 12955.0], [66.0, 12955.0], [66.1, 12955.0], [66.2, 12955.0], [66.3, 12964.0], [66.4, 12964.0], [66.5, 12964.0], [66.6, 12964.0], [66.7, 12964.0], [66.8, 12964.0], [66.9, 12965.0], [67.0, 12965.0], [67.1, 12965.0], [67.2, 12965.0], [67.3, 12965.0], [67.4, 12965.0], [67.5, 13004.0], [67.6, 13004.0], [67.7, 13004.0], [67.8, 13004.0], [67.9, 13004.0], [68.0, 13004.0], [68.1, 13004.0], [68.2, 13004.0], [68.3, 13004.0], [68.4, 13004.0], [68.5, 13004.0], [68.6, 13004.0], [68.7, 13098.0], [68.8, 13098.0], [68.9, 13098.0], [69.0, 13098.0], [69.1, 13098.0], [69.2, 13098.0], [69.3, 13098.0], [69.4, 13098.0], [69.5, 13098.0], [69.6, 13098.0], [69.7, 13098.0], [69.8, 13212.0], [69.9, 13212.0], [70.0, 13212.0], [70.1, 13212.0], [70.2, 13212.0], [70.3, 13212.0], [70.4, 13305.0], [70.5, 13305.0], [70.6, 13305.0], [70.7, 13305.0], [70.8, 13305.0], [70.9, 13305.0], [71.0, 13309.0], [71.1, 13309.0], [71.2, 13309.0], [71.3, 13309.0], [71.4, 13309.0], [71.5, 13309.0], [71.6, 13309.0], [71.7, 13309.0], [71.8, 13309.0], [71.9, 13309.0], [72.0, 13309.0], [72.1, 13312.0], [72.2, 13312.0], [72.3, 13312.0], [72.4, 13312.0], [72.5, 13312.0], [72.6, 13312.0], [72.7, 13411.0], [72.8, 13411.0], [72.9, 13411.0], [73.0, 13411.0], [73.1, 13411.0], [73.2, 13411.0], [73.3, 13412.0], [73.4, 13412.0], [73.5, 13412.0], [73.6, 13412.0], [73.7, 13412.0], [73.8, 13412.0], [73.9, 13624.0], [74.0, 13624.0], [74.1, 13624.0], [74.2, 13624.0], [74.3, 13624.0], [74.4, 13624.0], [74.5, 13725.0], [74.6, 13725.0], [74.7, 13725.0], [74.8, 13725.0], [74.9, 13725.0], [75.0, 13822.0], [75.1, 13822.0], [75.2, 13822.0], [75.3, 13822.0], [75.4, 13822.0], [75.5, 13822.0], [75.6, 13824.0], [75.7, 13824.0], [75.8, 13824.0], [75.9, 13824.0], [76.0, 13824.0], [76.1, 13824.0], [76.2, 13826.0], [76.3, 13826.0], [76.4, 13826.0], [76.5, 13826.0], [76.6, 13826.0], [76.7, 13826.0], [76.8, 13890.0], [76.9, 13890.0], [77.0, 13890.0], [77.1, 13890.0], [77.2, 13890.0], [77.3, 13890.0], [77.4, 13922.0], [77.5, 13922.0], [77.6, 13922.0], [77.7, 13922.0], [77.8, 13922.0], [77.9, 13922.0], [78.0, 13923.0], [78.1, 13923.0], [78.2, 13923.0], [78.3, 13923.0], [78.4, 13923.0], [78.5, 13924.0], [78.6, 13924.0], [78.7, 13924.0], [78.8, 13924.0], [78.9, 13924.0], [79.0, 13924.0], [79.1, 13925.0], [79.2, 13925.0], [79.3, 13925.0], [79.4, 13925.0], [79.5, 13925.0], [79.6, 13925.0], [79.7, 13927.0], [79.8, 13927.0], [79.9, 13927.0], [80.0, 13927.0], [80.1, 13927.0], [80.2, 13927.0], [80.3, 13932.0], [80.4, 13932.0], [80.5, 13932.0], [80.6, 13932.0], [80.7, 13932.0], [80.8, 13932.0], [80.9, 13975.0], [81.0, 13975.0], [81.1, 13975.0], [81.2, 13975.0], [81.3, 13975.0], [81.4, 13985.0], [81.5, 13985.0], [81.6, 13985.0], [81.7, 13985.0], [81.8, 13985.0], [81.9, 13985.0], [82.0, 14023.0], [82.1, 14023.0], [82.2, 14023.0], [82.3, 14023.0], [82.4, 14023.0], [82.5, 14023.0], [82.6, 14027.0], [82.7, 14027.0], [82.8, 14027.0], [82.9, 14027.0], [83.0, 14027.0], [83.1, 14027.0], [83.2, 14028.0], [83.3, 14028.0], [83.4, 14028.0], [83.5, 14028.0], [83.6, 14028.0], [83.7, 14028.0], [83.8, 14029.0], [83.9, 14029.0], [84.0, 14029.0], [84.1, 14029.0], [84.2, 14029.0], [84.3, 14029.0], [84.4, 14030.0], [84.5, 14030.0], [84.6, 14030.0], [84.7, 14030.0], [84.8, 14030.0], [84.9, 14031.0], [85.0, 14031.0], [85.1, 14031.0], [85.2, 14031.0], [85.3, 14031.0], [85.4, 14031.0], [85.5, 14032.0], [85.6, 14032.0], [85.7, 14032.0], [85.8, 14032.0], [85.9, 14032.0], [86.0, 14032.0], [86.1, 14032.0], [86.2, 14032.0], [86.3, 14032.0], [86.4, 14032.0], [86.5, 14032.0], [86.6, 14032.0], [86.7, 14071.0], [86.8, 14071.0], [86.9, 14071.0], [87.0, 14071.0], [87.1, 14071.0], [87.2, 14071.0], [87.3, 14122.0], [87.4, 14122.0], [87.5, 14122.0], [87.6, 14122.0], [87.7, 14122.0], [87.8, 14123.0], [87.9, 14123.0], [88.0, 14123.0], [88.1, 14123.0], [88.2, 14123.0], [88.3, 14123.0], [88.4, 14129.0], [88.5, 14129.0], [88.6, 14129.0], [88.7, 14129.0], [88.8, 14129.0], [88.9, 14129.0], [89.0, 14130.0], [89.1, 14130.0], [89.2, 14130.0], [89.3, 14130.0], [89.4, 14130.0], [89.5, 14130.0], [89.6, 14130.0], [89.7, 14130.0], [89.8, 14130.0], [89.9, 14130.0], [90.0, 14130.0], [90.1, 14130.0], [90.2, 14131.0], [90.3, 14131.0], [90.4, 14131.0], [90.5, 14131.0], [90.6, 14131.0], [90.7, 14132.0], [90.8, 14132.0], [90.9, 14132.0], [91.0, 14132.0], [91.1, 14132.0], [91.2, 14132.0], [91.3, 14135.0], [91.4, 14135.0], [91.5, 14135.0], [91.6, 14135.0], [91.7, 14135.0], [91.8, 14135.0], [91.9, 14135.0], [92.0, 14135.0], [92.1, 14135.0], [92.2, 14135.0], [92.3, 14135.0], [92.4, 14135.0], [92.5, 14175.0], [92.6, 14175.0], [92.7, 14175.0], [92.8, 14175.0], [92.9, 14175.0], [93.0, 14175.0], [93.1, 14183.0], [93.2, 14183.0], [93.3, 14183.0], [93.4, 14183.0], [93.5, 14183.0], [93.6, 14183.0], [93.7, 14231.0], [93.8, 14231.0], [93.9, 14231.0], [94.0, 14231.0], [94.1, 14231.0], [94.2, 14231.0], [94.3, 14231.0], [94.4, 14231.0], [94.5, 14231.0], [94.6, 14231.0], [94.7, 14231.0], [94.8, 14232.0], [94.9, 14232.0], [95.0, 14232.0], [95.1, 14232.0], [95.2, 14232.0], [95.3, 14232.0], [95.4, 14235.0], [95.5, 14235.0], [95.6, 14235.0], [95.7, 14235.0], [95.8, 14235.0], [95.9, 14235.0], [96.0, 14329.0], [96.1, 14329.0], [96.2, 14329.0], [96.3, 14329.0], [96.4, 14329.0], [96.5, 14329.0], [96.6, 14335.0], [96.7, 14335.0], [96.8, 14335.0], [96.9, 14335.0], [97.0, 14335.0], [97.1, 14537.0], [97.2, 14537.0], [97.3, 14537.0], [97.4, 14537.0], [97.5, 14537.0], [97.6, 14537.0], [97.7, 14538.0], [97.8, 14538.0], [97.9, 14538.0], [98.0, 14538.0], [98.1, 14538.0], [98.2, 14538.0], [98.3, 14637.0], [98.4, 14637.0], [98.5, 14637.0], [98.6, 14637.0], [98.7, 14637.0], [98.8, 14637.0], [98.9, 14745.0], [99.0, 14745.0], [99.1, 14745.0], [99.2, 14745.0], [99.3, 14745.0], [99.4, 14745.0], [99.5, 16792.0], [99.6, 16792.0], [99.7, 16792.0], [99.8, 16792.0], [99.9, 16792.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5500.0, "maxY": 13.0, "series": [{"data": [[8600.0, 1.0], [8200.0, 5.0], [8300.0, 3.0], [8700.0, 1.0], [8500.0, 2.0], [9100.0, 5.0], [9600.0, 3.0], [9700.0, 3.0], [9300.0, 2.0], [9900.0, 4.0], [10100.0, 13.0], [10200.0, 3.0], [10000.0, 6.0], [10300.0, 6.0], [10900.0, 1.0], [11700.0, 2.0], [12000.0, 4.0], [11900.0, 12.0], [11800.0, 6.0], [12300.0, 2.0], [12400.0, 2.0], [12700.0, 4.0], [12800.0, 4.0], [13000.0, 4.0], [12900.0, 7.0], [13300.0, 4.0], [13200.0, 1.0], [13600.0, 1.0], [13800.0, 4.0], [13700.0, 1.0], [13400.0, 2.0], [14100.0, 11.0], [14300.0, 2.0], [13900.0, 8.0], [14000.0, 9.0], [14200.0, 4.0], [14700.0, 1.0], [14600.0, 1.0], [14500.0, 2.0], [16700.0, 1.0], [5500.0, 1.0], [6000.0, 2.0], [6700.0, 2.0], [6800.0, 1.0], [7900.0, 1.0], [7800.0, 2.0], [8100.0, 2.0], [8000.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 172.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 172.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 172.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.6, "minX": 1.58912988E12, "maxY": 16.0, "series": [{"data": [[1.58913006E12, 10.473684210526317], [1.58912988E12, 2.6], [1.58913E12, 16.0], [1.58912994E12, 13.169230769230769]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913006E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8005.5, "minX": 1.0, "maxY": 15289.0, "series": [{"data": [[1.0, 9642.0], [2.0, 9706.75], [4.0, 8005.5], [8.0, 8317.176470588234], [16.0, 12087.125000000002], [10.0, 11674.0], [6.0, 12731.666666666666], [3.0, 15289.0], [13.0, 12729.333333333334], [7.0, 12908.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.540697674418604, 11516.73837209302]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 52.0, "minX": 1.58912988E12, "maxY": 82108.15, "series": [{"data": [[1.58913006E12, 98.8], [1.58912988E12, 52.0], [1.58913E12, 405.6], [1.58912994E12, 338.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58913006E12, 20001.683333333334], [1.58912988E12, 10526.533333333333], [1.58913E12, 82108.15], [1.58912994E12, 68425.16666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913006E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9056.3, "minX": 1.58912988E12, "maxY": 12885.263157894735, "series": [{"data": [[1.58913006E12, 12885.263157894735], [1.58912988E12, 9056.3], [1.58913E12, 12543.653846153848], [1.58912994E12, 10262.938461538464]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913006E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9056.099999999999, "minX": 1.58912988E12, "maxY": 12885.263157894735, "series": [{"data": [[1.58913006E12, 12885.263157894735], [1.58912988E12, 9056.099999999999], [1.58913E12, 12543.589743589742], [1.58912994E12, 10262.92307692308]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913006E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.2631578947368423, "minX": 1.58912988E12, "maxY": 5.2, "series": [{"data": [[1.58913006E12, 1.2631578947368423], [1.58912988E12, 5.2], [1.58913E12, 1.58974358974359], [1.58912994E12, 1.9846153846153851]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913006E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5595.0, "minX": 1.58912988E12, "maxY": 16792.0, "series": [{"data": [[1.58913006E12, 16792.0], [1.58912988E12, 9730.0], [1.58913E12, 14637.0], [1.58912994E12, 14745.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58913006E12, 9933.0], [1.58912988E12, 6748.0], [1.58913E12, 10032.0], [1.58912994E12, 5595.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58913006E12, 14538.0], [1.58912988E12, 9729.7], [1.58913E12, 14130.1], [1.58912994E12, 13927.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58913006E12, 16792.0], [1.58912988E12, 9730.0], [1.58913E12, 14637.0], [1.58912994E12, 14745.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58913006E12, 16792.0], [1.58912988E12, 9730.0], [1.58913E12, 14185.45], [1.58912994E12, 14135.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913006E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8247.0, "minX": 1.0, "maxY": 13361.5, "series": [{"data": [[1.0, 9610.0], [2.0, 8910.0], [5.0, 8247.0], [3.0, 12078.0], [6.0, 13361.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8247.0, "minX": 1.0, "maxY": 13361.5, "series": [{"data": [[1.0, 9610.0], [2.0, 8910.0], [5.0, 8247.0], [3.0, 12078.0], [6.0, 13361.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.58912988E12, "maxY": 1.3, "series": [{"data": [[1.58913006E12, 0.05], [1.58912988E12, 0.23333333333333334], [1.58913E12, 1.3], [1.58912994E12, 1.2833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913006E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.58912988E12, "maxY": 1.3, "series": [{"data": [[1.58913006E12, 0.31666666666666665], [1.58912988E12, 0.16666666666666666], [1.58913E12, 1.3], [1.58912994E12, 1.0833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913006E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.58912988E12, "maxY": 1.3, "series": [{"data": [[1.58913006E12, 0.31666666666666665], [1.58912988E12, 0.16666666666666666], [1.58913E12, 1.3], [1.58912994E12, 1.0833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913006E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.58912988E12, "maxY": 1.3, "series": [{"data": [[1.58913006E12, 0.31666666666666665], [1.58912988E12, 0.16666666666666666], [1.58913E12, 1.3], [1.58912994E12, 1.0833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913006E12, "title": "Total Transactions Per Second"}},
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

