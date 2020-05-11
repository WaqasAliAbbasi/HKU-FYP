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
        data: {"result": {"minY": 5027.0, "minX": 0.0, "maxY": 120005.0, "series": [{"data": [[0.0, 5027.0], [0.1, 5027.0], [0.2, 5027.0], [0.3, 5027.0], [0.4, 5027.0], [0.5, 5027.0], [0.6, 5321.0], [0.7, 5321.0], [0.8, 5321.0], [0.9, 5321.0], [1.0, 5321.0], [1.1, 5321.0], [1.2, 5369.0], [1.3, 5369.0], [1.4, 5369.0], [1.5, 5369.0], [1.6, 5369.0], [1.7, 5369.0], [1.8, 5829.0], [1.9, 5829.0], [2.0, 5829.0], [2.1, 5829.0], [2.2, 5829.0], [2.3, 5829.0], [2.4, 7376.0], [2.5, 7376.0], [2.6, 7376.0], [2.7, 7376.0], [2.8, 7376.0], [2.9, 7376.0], [3.0, 7451.0], [3.1, 7451.0], [3.2, 7451.0], [3.3, 7451.0], [3.4, 7451.0], [3.5, 7471.0], [3.6, 7471.0], [3.7, 7471.0], [3.8, 7471.0], [3.9, 7471.0], [4.0, 7471.0], [4.1, 7471.0], [4.2, 7471.0], [4.3, 7471.0], [4.4, 7471.0], [4.5, 7471.0], [4.6, 7471.0], [4.7, 7476.0], [4.8, 7476.0], [4.9, 7476.0], [5.0, 7476.0], [5.1, 7476.0], [5.2, 7476.0], [5.3, 7530.0], [5.4, 7530.0], [5.5, 7530.0], [5.6, 7530.0], [5.7, 7530.0], [5.8, 7530.0], [5.9, 7533.0], [6.0, 7533.0], [6.1, 7533.0], [6.2, 7533.0], [6.3, 7533.0], [6.4, 7534.0], [6.5, 7534.0], [6.6, 7534.0], [6.7, 7534.0], [6.8, 7534.0], [6.9, 7534.0], [7.0, 7534.0], [7.1, 7534.0], [7.2, 7534.0], [7.3, 7534.0], [7.4, 7534.0], [7.5, 7534.0], [7.6, 7668.0], [7.7, 7668.0], [7.8, 7668.0], [7.9, 7668.0], [8.0, 7668.0], [8.1, 7668.0], [8.2, 7668.0], [8.3, 7668.0], [8.4, 7668.0], [8.5, 7668.0], [8.6, 7668.0], [8.7, 7668.0], [8.8, 7669.0], [8.9, 7669.0], [9.0, 7669.0], [9.1, 7669.0], [9.2, 7669.0], [9.3, 7669.0], [9.4, 7679.0], [9.5, 7679.0], [9.6, 7679.0], [9.7, 7679.0], [9.8, 7679.0], [9.9, 7753.0], [10.0, 7753.0], [10.1, 7753.0], [10.2, 7753.0], [10.3, 7753.0], [10.4, 7753.0], [10.5, 7790.0], [10.6, 7790.0], [10.7, 7790.0], [10.8, 7790.0], [10.9, 7790.0], [11.0, 7790.0], [11.1, 7799.0], [11.2, 7799.0], [11.3, 7799.0], [11.4, 7799.0], [11.5, 7799.0], [11.6, 7799.0], [11.7, 7866.0], [11.8, 7866.0], [11.9, 7866.0], [12.0, 7866.0], [12.1, 7866.0], [12.2, 7866.0], [12.3, 7871.0], [12.4, 7871.0], [12.5, 7871.0], [12.6, 7871.0], [12.7, 7871.0], [12.8, 7887.0], [12.9, 7887.0], [13.0, 7887.0], [13.1, 7887.0], [13.2, 7887.0], [13.3, 7887.0], [13.4, 7887.0], [13.5, 7887.0], [13.6, 7887.0], [13.7, 7887.0], [13.8, 7887.0], [13.9, 7887.0], [14.0, 7888.0], [14.1, 7888.0], [14.2, 7888.0], [14.3, 7888.0], [14.4, 7888.0], [14.5, 7888.0], [14.6, 7983.0], [14.7, 7983.0], [14.8, 7983.0], [14.9, 7983.0], [15.0, 7983.0], [15.1, 7983.0], [15.2, 7983.0], [15.3, 7983.0], [15.4, 7983.0], [15.5, 7983.0], [15.6, 7983.0], [15.7, 8046.0], [15.8, 8046.0], [15.9, 8046.0], [16.0, 8046.0], [16.1, 8046.0], [16.2, 8046.0], [16.3, 8055.0], [16.4, 8055.0], [16.5, 8055.0], [16.6, 8055.0], [16.7, 8055.0], [16.8, 8055.0], [16.9, 8056.0], [17.0, 8056.0], [17.1, 8056.0], [17.2, 8056.0], [17.3, 8056.0], [17.4, 8056.0], [17.5, 8199.0], [17.6, 8199.0], [17.7, 8199.0], [17.8, 8199.0], [17.9, 8199.0], [18.0, 8199.0], [18.1, 8200.0], [18.2, 8200.0], [18.3, 8200.0], [18.4, 8200.0], [18.5, 8200.0], [18.6, 8200.0], [18.7, 8280.0], [18.8, 8280.0], [18.9, 8280.0], [19.0, 8280.0], [19.1, 8280.0], [19.2, 8281.0], [19.3, 8281.0], [19.4, 8281.0], [19.5, 8281.0], [19.6, 8281.0], [19.7, 8281.0], [19.8, 8281.0], [19.9, 8281.0], [20.0, 8281.0], [20.1, 8281.0], [20.2, 8281.0], [20.3, 8281.0], [20.4, 8702.0], [20.5, 8702.0], [20.6, 8702.0], [20.7, 8702.0], [20.8, 8702.0], [20.9, 8702.0], [21.0, 8702.0], [21.1, 8702.0], [21.2, 8702.0], [21.3, 8702.0], [21.4, 8702.0], [21.5, 8702.0], [21.6, 8702.0], [21.7, 8702.0], [21.8, 8702.0], [21.9, 8702.0], [22.0, 8702.0], [22.1, 9017.0], [22.2, 9017.0], [22.3, 9017.0], [22.4, 9017.0], [22.5, 9017.0], [22.6, 9017.0], [22.7, 9264.0], [22.8, 9264.0], [22.9, 9264.0], [23.0, 9264.0], [23.1, 9264.0], [23.2, 9264.0], [23.3, 9725.0], [23.4, 9725.0], [23.5, 9725.0], [23.6, 9725.0], [23.7, 9725.0], [23.8, 9725.0], [23.9, 9926.0], [24.0, 9926.0], [24.1, 9926.0], [24.2, 9926.0], [24.3, 9926.0], [24.4, 9926.0], [24.5, 10444.0], [24.6, 10444.0], [24.7, 10444.0], [24.8, 10444.0], [24.9, 10444.0], [25.0, 10445.0], [25.1, 10445.0], [25.2, 10445.0], [25.3, 10445.0], [25.4, 10445.0], [25.5, 10445.0], [25.6, 10446.0], [25.7, 10446.0], [25.8, 10446.0], [25.9, 10446.0], [26.0, 10446.0], [26.1, 10446.0], [26.2, 10747.0], [26.3, 10747.0], [26.4, 10747.0], [26.5, 10747.0], [26.6, 10747.0], [26.7, 10747.0], [26.8, 10747.0], [26.9, 10747.0], [27.0, 10747.0], [27.1, 10747.0], [27.2, 10747.0], [27.3, 10747.0], [27.4, 10748.0], [27.5, 10748.0], [27.6, 10748.0], [27.7, 10748.0], [27.8, 10748.0], [27.9, 10748.0], [28.0, 10752.0], [28.1, 10752.0], [28.2, 10752.0], [28.3, 10752.0], [28.4, 10752.0], [28.5, 10752.0], [28.6, 10752.0], [28.7, 10752.0], [28.8, 10752.0], [28.9, 10752.0], [29.0, 10752.0], [29.1, 10752.0], [29.2, 10752.0], [29.3, 10752.0], [29.4, 10752.0], [29.5, 10752.0], [29.6, 10752.0], [29.7, 11352.0], [29.8, 11352.0], [29.9, 11352.0], [30.0, 11352.0], [30.1, 11352.0], [30.2, 11352.0], [30.3, 11352.0], [30.4, 11352.0], [30.5, 11352.0], [30.6, 11352.0], [30.7, 11352.0], [30.8, 11352.0], [30.9, 11353.0], [31.0, 11353.0], [31.1, 11353.0], [31.2, 11353.0], [31.3, 11353.0], [31.4, 11492.0], [31.5, 11492.0], [31.6, 11492.0], [31.7, 11492.0], [31.8, 11492.0], [31.9, 11492.0], [32.0, 11492.0], [32.1, 11492.0], [32.2, 11492.0], [32.3, 11492.0], [32.4, 11492.0], [32.5, 11492.0], [32.6, 11493.0], [32.7, 11493.0], [32.8, 11493.0], [32.9, 11493.0], [33.0, 11493.0], [33.1, 11493.0], [33.2, 11637.0], [33.3, 11637.0], [33.4, 11637.0], [33.5, 11637.0], [33.6, 11637.0], [33.7, 11637.0], [33.8, 11637.0], [33.9, 11637.0], [34.0, 11637.0], [34.1, 11637.0], [34.2, 11637.0], [34.3, 11637.0], [34.4, 11638.0], [34.5, 11638.0], [34.6, 11638.0], [34.7, 11638.0], [34.8, 11638.0], [34.9, 12110.0], [35.0, 12110.0], [35.1, 12110.0], [35.2, 12110.0], [35.3, 12110.0], [35.4, 12110.0], [35.5, 12111.0], [35.6, 12111.0], [35.7, 12111.0], [35.8, 12111.0], [35.9, 12111.0], [36.0, 12111.0], [36.1, 12111.0], [36.2, 12111.0], [36.3, 12111.0], [36.4, 12111.0], [36.5, 12111.0], [36.6, 12111.0], [36.7, 12341.0], [36.8, 12341.0], [36.9, 12341.0], [37.0, 12341.0], [37.1, 12341.0], [37.2, 12341.0], [37.3, 12341.0], [37.4, 12341.0], [37.5, 12341.0], [37.6, 12341.0], [37.7, 12341.0], [37.8, 12341.0], [37.9, 12341.0], [38.0, 12341.0], [38.1, 12341.0], [38.2, 12341.0], [38.3, 12341.0], [38.4, 12811.0], [38.5, 12811.0], [38.6, 12811.0], [38.7, 12811.0], [38.8, 12811.0], [38.9, 12811.0], [39.0, 12811.0], [39.1, 12811.0], [39.2, 12811.0], [39.3, 12811.0], [39.4, 12811.0], [39.5, 12811.0], [39.6, 12811.0], [39.7, 12811.0], [39.8, 12811.0], [39.9, 12811.0], [40.0, 12811.0], [40.1, 12811.0], [40.2, 13088.0], [40.3, 13088.0], [40.4, 13088.0], [40.5, 13088.0], [40.6, 13088.0], [40.7, 13967.0], [40.8, 13967.0], [40.9, 13967.0], [41.0, 13967.0], [41.1, 13967.0], [41.2, 13967.0], [41.3, 13968.0], [41.4, 13968.0], [41.5, 13968.0], [41.6, 13968.0], [41.7, 13968.0], [41.8, 13968.0], [41.9, 14444.0], [42.0, 14444.0], [42.1, 14444.0], [42.2, 14444.0], [42.3, 14444.0], [42.4, 14444.0], [42.5, 14444.0], [42.6, 14444.0], [42.7, 14444.0], [42.8, 14444.0], [42.9, 14444.0], [43.0, 14444.0], [43.1, 14445.0], [43.2, 14445.0], [43.3, 14445.0], [43.4, 14445.0], [43.5, 14445.0], [43.6, 14445.0], [43.7, 15792.0], [43.8, 15792.0], [43.9, 15792.0], [44.0, 15792.0], [44.1, 15792.0], [44.2, 15792.0], [44.3, 15792.0], [44.4, 15792.0], [44.5, 15792.0], [44.6, 15792.0], [44.7, 15792.0], [44.8, 15794.0], [44.9, 15794.0], [45.0, 15794.0], [45.1, 15794.0], [45.2, 15794.0], [45.3, 15794.0], [45.4, 18960.0], [45.5, 18960.0], [45.6, 18960.0], [45.7, 18960.0], [45.8, 18960.0], [45.9, 18960.0], [46.0, 18963.0], [46.1, 18963.0], [46.2, 18963.0], [46.3, 18963.0], [46.4, 18963.0], [46.5, 18963.0], [46.6, 18965.0], [46.7, 18965.0], [46.8, 18965.0], [46.9, 18965.0], [47.0, 18965.0], [47.1, 21261.0], [47.2, 21261.0], [47.3, 21261.0], [47.4, 21261.0], [47.5, 21261.0], [47.6, 21261.0], [47.7, 21270.0], [47.8, 21270.0], [47.9, 21270.0], [48.0, 21270.0], [48.1, 21270.0], [48.2, 21270.0], [48.3, 21280.0], [48.4, 21280.0], [48.5, 21280.0], [48.6, 21280.0], [48.7, 21280.0], [48.8, 21280.0], [48.9, 21570.0], [49.0, 21570.0], [49.1, 21570.0], [49.2, 21570.0], [49.3, 21570.0], [49.4, 21570.0], [49.5, 21571.0], [49.6, 21571.0], [49.7, 21571.0], [49.8, 21571.0], [49.9, 21571.0], [50.0, 21571.0], [50.1, 21865.0], [50.2, 21865.0], [50.3, 21865.0], [50.4, 21865.0], [50.5, 21865.0], [50.6, 21866.0], [50.7, 21866.0], [50.8, 21866.0], [50.9, 21866.0], [51.0, 21866.0], [51.1, 21866.0], [51.2, 21933.0], [51.3, 21933.0], [51.4, 21933.0], [51.5, 21933.0], [51.6, 21933.0], [51.7, 21933.0], [51.8, 21933.0], [51.9, 21933.0], [52.0, 21933.0], [52.1, 21933.0], [52.2, 21933.0], [52.3, 21933.0], [52.4, 22654.0], [52.5, 22654.0], [52.6, 22654.0], [52.7, 22654.0], [52.8, 22654.0], [52.9, 22654.0], [53.0, 22870.0], [53.1, 22870.0], [53.2, 22870.0], [53.3, 22870.0], [53.4, 22870.0], [53.5, 22870.0], [53.6, 22870.0], [53.7, 22870.0], [53.8, 22870.0], [53.9, 22870.0], [54.0, 22870.0], [54.1, 22936.0], [54.2, 22936.0], [54.3, 22936.0], [54.4, 22936.0], [54.5, 22936.0], [54.6, 22936.0], [54.7, 22936.0], [54.8, 22936.0], [54.9, 22936.0], [55.0, 22936.0], [55.1, 22936.0], [55.2, 22936.0], [55.3, 22958.0], [55.4, 22958.0], [55.5, 22958.0], [55.6, 22958.0], [55.7, 22958.0], [55.8, 22958.0], [55.9, 22959.0], [56.0, 22959.0], [56.1, 22959.0], [56.2, 22959.0], [56.3, 22959.0], [56.4, 23243.0], [56.5, 23243.0], [56.6, 23243.0], [56.7, 23243.0], [56.8, 23243.0], [56.9, 23243.0], [57.0, 23244.0], [57.1, 23244.0], [57.2, 23244.0], [57.3, 23244.0], [57.4, 23244.0], [57.5, 23244.0], [57.6, 23346.0], [57.7, 23346.0], [57.8, 23346.0], [57.9, 23346.0], [58.0, 23346.0], [58.1, 23346.0], [58.2, 23346.0], [58.3, 23346.0], [58.4, 23346.0], [58.5, 23346.0], [58.6, 23346.0], [58.7, 23346.0], [58.8, 23653.0], [58.9, 23653.0], [59.0, 23653.0], [59.1, 23653.0], [59.2, 23653.0], [59.3, 23653.0], [59.4, 23654.0], [59.5, 23654.0], [59.6, 23654.0], [59.7, 23654.0], [59.8, 23654.0], [59.9, 23655.0], [60.0, 23655.0], [60.1, 23655.0], [60.2, 23655.0], [60.3, 23655.0], [60.4, 23655.0], [60.5, 23655.0], [60.6, 23655.0], [60.7, 23655.0], [60.8, 23655.0], [60.9, 23655.0], [61.0, 23655.0], [61.1, 24206.0], [61.2, 24206.0], [61.3, 24206.0], [61.4, 24206.0], [61.5, 24206.0], [61.6, 24206.0], [61.7, 24269.0], [61.8, 24269.0], [61.9, 24269.0], [62.0, 24269.0], [62.1, 24269.0], [62.2, 24269.0], [62.3, 24269.0], [62.4, 24269.0], [62.5, 24269.0], [62.6, 24269.0], [62.7, 24269.0], [62.8, 24642.0], [62.9, 24642.0], [63.0, 24642.0], [63.1, 24642.0], [63.2, 24642.0], [63.3, 24642.0], [63.4, 24933.0], [63.5, 24933.0], [63.6, 24933.0], [63.7, 24933.0], [63.8, 24933.0], [63.9, 24933.0], [64.0, 25004.0], [64.1, 25004.0], [64.2, 25004.0], [64.3, 25004.0], [64.4, 25004.0], [64.5, 25004.0], [64.6, 25804.0], [64.7, 25804.0], [64.8, 25804.0], [64.9, 25804.0], [65.0, 25804.0], [65.1, 25804.0], [65.2, 26111.0], [65.3, 26111.0], [65.4, 26111.0], [65.5, 26111.0], [65.6, 26111.0], [65.7, 26131.0], [65.8, 26131.0], [65.9, 26131.0], [66.0, 26131.0], [66.1, 26131.0], [66.2, 26131.0], [66.3, 26316.0], [66.4, 26316.0], [66.5, 26316.0], [66.6, 26316.0], [66.7, 26316.0], [66.8, 26316.0], [66.9, 26317.0], [67.0, 26317.0], [67.1, 26317.0], [67.2, 26317.0], [67.3, 26317.0], [67.4, 26317.0], [67.5, 26318.0], [67.6, 26318.0], [67.7, 26318.0], [67.8, 26318.0], [67.9, 26318.0], [68.0, 26318.0], [68.1, 28670.0], [68.2, 28670.0], [68.3, 28670.0], [68.4, 28670.0], [68.5, 28670.0], [68.6, 28670.0], [68.7, 28670.0], [68.8, 28670.0], [68.9, 28670.0], [69.0, 28670.0], [69.1, 28670.0], [69.2, 28671.0], [69.3, 28671.0], [69.4, 28671.0], [69.5, 28671.0], [69.6, 28671.0], [69.7, 28671.0], [69.8, 29997.0], [69.9, 29997.0], [70.0, 29997.0], [70.1, 29997.0], [70.2, 29997.0], [70.3, 29997.0], [70.4, 29998.0], [70.5, 29998.0], [70.6, 29998.0], [70.7, 29998.0], [70.8, 29998.0], [70.9, 29998.0], [71.0, 30002.0], [71.1, 30002.0], [71.2, 30002.0], [71.3, 30002.0], [71.4, 30002.0], [71.5, 30002.0], [71.6, 33273.0], [71.7, 33273.0], [71.8, 33273.0], [71.9, 33273.0], [72.0, 33273.0], [72.1, 33274.0], [72.2, 33274.0], [72.3, 33274.0], [72.4, 33274.0], [72.5, 33274.0], [72.6, 33274.0], [72.7, 33276.0], [72.8, 33276.0], [72.9, 33276.0], [73.0, 33276.0], [73.1, 33276.0], [73.2, 33276.0], [73.3, 35391.0], [73.4, 35391.0], [73.5, 35391.0], [73.6, 35391.0], [73.7, 35391.0], [73.8, 35391.0], [73.9, 35391.0], [74.0, 35391.0], [74.1, 35391.0], [74.2, 35391.0], [74.3, 35391.0], [74.4, 35391.0], [74.5, 35395.0], [74.6, 35395.0], [74.7, 35395.0], [74.8, 35395.0], [74.9, 35395.0], [75.0, 36856.0], [75.1, 36856.0], [75.2, 36856.0], [75.3, 36856.0], [75.4, 36856.0], [75.5, 36856.0], [75.6, 36856.0], [75.7, 36856.0], [75.8, 36856.0], [75.9, 36856.0], [76.0, 36856.0], [76.1, 36856.0], [76.2, 36857.0], [76.3, 36857.0], [76.4, 36857.0], [76.5, 36857.0], [76.6, 36857.0], [76.7, 36857.0], [76.8, 39926.0], [76.9, 39926.0], [77.0, 39926.0], [77.1, 39926.0], [77.2, 39926.0], [77.3, 39926.0], [77.4, 39928.0], [77.5, 39928.0], [77.6, 39928.0], [77.7, 39928.0], [77.8, 39928.0], [77.9, 39928.0], [78.0, 39929.0], [78.1, 39929.0], [78.2, 39929.0], [78.3, 39929.0], [78.4, 39929.0], [78.5, 42269.0], [78.6, 42269.0], [78.7, 42269.0], [78.8, 42269.0], [78.9, 42269.0], [79.0, 42269.0], [79.1, 42273.0], [79.2, 42273.0], [79.3, 42273.0], [79.4, 42273.0], [79.5, 42273.0], [79.6, 42273.0], [79.7, 42282.0], [79.8, 42282.0], [79.9, 42282.0], [80.0, 42282.0], [80.1, 42282.0], [80.2, 42282.0], [80.3, 43806.0], [80.4, 43806.0], [80.5, 43806.0], [80.6, 43806.0], [80.7, 43806.0], [80.8, 43806.0], [80.9, 43806.0], [81.0, 43806.0], [81.1, 43806.0], [81.2, 43806.0], [81.3, 43806.0], [81.4, 43807.0], [81.5, 43807.0], [81.6, 43807.0], [81.7, 43807.0], [81.8, 43807.0], [81.9, 43807.0], [82.0, 46871.0], [82.1, 46871.0], [82.2, 46871.0], [82.3, 46871.0], [82.4, 46871.0], [82.5, 46871.0], [82.6, 46878.0], [82.7, 46878.0], [82.8, 46878.0], [82.9, 46878.0], [83.0, 46878.0], [83.1, 46878.0], [83.2, 46878.0], [83.3, 46878.0], [83.4, 46878.0], [83.5, 46878.0], [83.6, 46878.0], [83.7, 46878.0], [83.8, 47714.0], [83.9, 47714.0], [84.0, 47714.0], [84.1, 47714.0], [84.2, 47714.0], [84.3, 47714.0], [84.4, 47714.0], [84.5, 47714.0], [84.6, 47714.0], [84.7, 47714.0], [84.8, 47714.0], [84.9, 47715.0], [85.0, 47715.0], [85.1, 47715.0], [85.2, 47715.0], [85.3, 47715.0], [85.4, 47715.0], [85.5, 47817.0], [85.6, 47817.0], [85.7, 47817.0], [85.8, 47817.0], [85.9, 47817.0], [86.0, 47817.0], [86.1, 47818.0], [86.2, 47818.0], [86.3, 47818.0], [86.4, 47818.0], [86.5, 47818.0], [86.6, 47818.0], [86.7, 47818.0], [86.8, 47818.0], [86.9, 47818.0], [87.0, 47818.0], [87.1, 47818.0], [87.2, 47818.0], [87.3, 47818.0], [87.4, 47818.0], [87.5, 47818.0], [87.6, 47818.0], [87.7, 47818.0], [87.8, 47818.0], [87.9, 47818.0], [88.0, 47818.0], [88.1, 47818.0], [88.2, 47818.0], [88.3, 47818.0], [88.4, 47819.0], [88.5, 47819.0], [88.6, 47819.0], [88.7, 47819.0], [88.8, 47819.0], [88.9, 47819.0], [89.0, 47922.0], [89.1, 47922.0], [89.2, 47922.0], [89.3, 47922.0], [89.4, 47922.0], [89.5, 47922.0], [89.6, 47922.0], [89.7, 47922.0], [89.8, 47922.0], [89.9, 47922.0], [90.0, 47922.0], [90.1, 47922.0], [90.2, 47922.0], [90.3, 47922.0], [90.4, 47922.0], [90.5, 47922.0], [90.6, 47922.0], [90.7, 48003.0], [90.8, 48003.0], [90.9, 48003.0], [91.0, 48003.0], [91.1, 48003.0], [91.2, 48003.0], [91.3, 48003.0], [91.4, 48003.0], [91.5, 48003.0], [91.6, 48003.0], [91.7, 48003.0], [91.8, 48003.0], [91.9, 48003.0], [92.0, 48003.0], [92.1, 48003.0], [92.2, 48003.0], [92.3, 48003.0], [92.4, 48003.0], [92.5, 48030.0], [92.6, 48030.0], [92.7, 48030.0], [92.8, 48030.0], [92.9, 48030.0], [93.0, 48030.0], [93.1, 48030.0], [93.2, 48030.0], [93.3, 48030.0], [93.4, 48030.0], [93.5, 48030.0], [93.6, 48030.0], [93.7, 48030.0], [93.8, 48030.0], [93.9, 48030.0], [94.0, 48030.0], [94.1, 48030.0], [94.2, 48123.0], [94.3, 48123.0], [94.4, 48123.0], [94.5, 48123.0], [94.6, 48123.0], [94.7, 48123.0], [94.8, 48123.0], [94.9, 48123.0], [95.0, 48123.0], [95.1, 48123.0], [95.2, 48123.0], [95.3, 48123.0], [95.4, 48123.0], [95.5, 48123.0], [95.6, 48123.0], [95.7, 48123.0], [95.8, 48123.0], [95.9, 48123.0], [96.0, 48124.0], [96.1, 48124.0], [96.2, 48124.0], [96.3, 48124.0], [96.4, 48124.0], [96.5, 48124.0], [96.6, 48124.0], [96.7, 48124.0], [96.8, 48124.0], [96.9, 48124.0], [97.0, 48124.0], [97.1, 48125.0], [97.2, 48125.0], [97.3, 48125.0], [97.4, 48125.0], [97.5, 48125.0], [97.6, 48125.0], [97.7, 48125.0], [97.8, 48125.0], [97.9, 48125.0], [98.0, 48125.0], [98.1, 48125.0], [98.2, 48125.0], [98.3, 48125.0], [98.4, 48125.0], [98.5, 48125.0], [98.6, 48125.0], [98.7, 48125.0], [98.8, 48125.0], [98.9, 48126.0], [99.0, 48126.0], [99.1, 48126.0], [99.2, 48126.0], [99.3, 48126.0], [99.4, 48126.0], [99.5, 120005.0], [99.6, 120005.0], [99.7, 120005.0], [99.8, 120005.0], [99.9, 120005.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5000.0, "maxY": 9.0, "series": [{"data": [[5000.0, 1.0], [5300.0, 2.0], [5800.0, 1.0], [7400.0, 4.0], [7300.0, 1.0], [7600.0, 4.0], [7500.0, 4.0], [7800.0, 5.0], [7700.0, 3.0], [7900.0, 2.0], [8100.0, 1.0], [8000.0, 3.0], [8200.0, 4.0], [8700.0, 3.0], [9200.0, 1.0], [9000.0, 1.0], [9700.0, 1.0], [9900.0, 1.0], [10700.0, 6.0], [10400.0, 3.0], [11600.0, 3.0], [11400.0, 3.0], [11300.0, 3.0], [12100.0, 3.0], [12300.0, 3.0], [13000.0, 1.0], [12800.0, 3.0], [13900.0, 2.0], [14400.0, 3.0], [15700.0, 3.0], [18900.0, 3.0], [21200.0, 3.0], [21500.0, 2.0], [21800.0, 2.0], [21900.0, 2.0], [22600.0, 1.0], [23300.0, 2.0], [22800.0, 2.0], [22900.0, 4.0], [23200.0, 2.0], [24200.0, 3.0], [23600.0, 4.0], [24600.0, 1.0], [24900.0, 1.0], [25000.0, 1.0], [25800.0, 1.0], [26100.0, 2.0], [26300.0, 3.0], [28600.0, 3.0], [29900.0, 2.0], [30000.0, 1.0], [33200.0, 3.0], [35300.0, 3.0], [36800.0, 3.0], [39900.0, 3.0], [42200.0, 3.0], [43800.0, 3.0], [46800.0, 3.0], [47800.0, 6.0], [48100.0, 9.0], [48000.0, 6.0], [47900.0, 3.0], [47700.0, 3.0], [120000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 171.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 171.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5891702E12, "maxY": 36.52631578947368, "series": [{"data": [[1.58917032E12, 36.52631578947368], [1.5891702E12, 1.0], [1.58917038E12, 34.77611940298509], [1.58917026E12, 5.703703703703703]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917038E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7476.75, "minX": 1.0, "maxY": 120005.0, "series": [{"data": [[2.0, 7525.4], [32.0, 13223.518518518518], [34.0, 43806.333333333336], [37.0, 42274.666666666664], [39.0, 39926.0], [40.0, 39928.5], [43.0, 36856.333333333336], [46.0, 35392.333333333336], [49.0, 33274.333333333336], [3.0, 47817.666666666664], [53.0, 28671.0], [52.0, 29999.0], [55.0, 28670.0], [58.0, 26317.0], [61.0, 23585.333333333332], [4.0, 7476.75], [64.0, 23238.033333333336], [6.0, 48125.333333333336], [8.0, 7775.588235294119], [9.0, 47714.333333333336], [12.0, 48123.666666666664], [15.0, 48030.0], [1.0, 7868.5], [16.0, 10229.09090909091], [18.0, 47922.0], [21.0, 48003.0], [22.0, 48125.0], [24.0, 48123.0], [27.0, 47818.333333333336], [28.0, 120005.0], [31.0, 46875.666666666664]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[30.59302325581394, 23840.436046511633]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10.4, "minX": 1.5891702E12, "maxY": 80003.48333333334, "series": [{"data": [[1.58917032E12, 395.2], [1.5891702E12, 10.4], [1.58917038E12, 377.48333333333335], [1.58917026E12, 140.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58917032E12, 80003.48333333334], [1.5891702E12, 2105.266666666667], [1.58917038E12, 69478.0], [1.58917026E12, 28423.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917038E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7593.333333333333, "minX": 1.5891702E12, "maxY": 40602.01492537314, "series": [{"data": [[1.58917032E12, 15256.092105263155], [1.5891702E12, 7868.5], [1.58917038E12, 40602.01492537314], [1.58917026E12, 7593.333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917038E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7593.259259259259, "minX": 1.5891702E12, "maxY": 38810.86567164179, "series": [{"data": [[1.58917032E12, 15255.947368421053], [1.5891702E12, 7867.5], [1.58917038E12, 38810.86567164179], [1.58917026E12, 7593.259259259259]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917038E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.777777777777778, "minX": 1.5891702E12, "maxY": 19.0, "series": [{"data": [[1.58917032E12, 3.1447368421052637], [1.5891702E12, 19.0], [1.58917038E12, 5.582089552238807], [1.58917026E12, 1.777777777777778]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917038E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5027.0, "minX": 1.5891702E12, "maxY": 48126.0, "series": [{"data": [[1.58917032E12, 26111.0], [1.5891702E12, 7871.0], [1.58917038E12, 48126.0], [1.58917026E12, 9926.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58917032E12, 7790.0], [1.5891702E12, 7866.0], [1.58917038E12, 22958.0], [1.58917026E12, 5027.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58917032E12, 23655.0], [1.5891702E12, 7871.0], [1.58917038E12, 48123.3], [1.58917026E12, 8814.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58917032E12, 26111.0], [1.5891702E12, 7871.0], [1.58917038E12, 48126.0], [1.58917026E12, 9926.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58917032E12, 24685.649999999998], [1.5891702E12, 7871.0], [1.58917038E12, 48125.0], [1.58917026E12, 9661.199999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917038E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7530.0, "minX": 1.0, "maxY": 120005.0, "series": [{"data": [[1.0, 7530.0], [4.0, 7602.0], [3.0, 22903.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120005.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 22903.0, "series": [{"data": [[1.0, 7530.0], [4.0, 7602.0], [3.0, 22903.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.5891702E12, "maxY": 2.2, "series": [{"data": [[1.58917032E12, 2.2], [1.5891702E12, 0.05], [1.58917038E12, 0.05], [1.58917026E12, 0.5666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917038E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5891702E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.58917032E12, 1.2666666666666666], [1.5891702E12, 0.03333333333333333], [1.58917038E12, 1.1], [1.58917026E12, 0.45]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58917038E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917038E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5891702E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.58917032E12, 1.2666666666666666], [1.5891702E12, 0.03333333333333333], [1.58917038E12, 1.1], [1.58917026E12, 0.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58917038E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917038E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5891702E12, "maxY": 1.2666666666666666, "series": [{"data": [[1.58917032E12, 1.2666666666666666], [1.5891702E12, 0.03333333333333333], [1.58917038E12, 1.1], [1.58917026E12, 0.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58917038E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58917038E12, "title": "Total Transactions Per Second"}},
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

