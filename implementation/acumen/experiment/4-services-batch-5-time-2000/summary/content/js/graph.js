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
        data: {"result": {"minY": 7347.0, "minX": 0.0, "maxY": 47578.0, "series": [{"data": [[0.0, 7347.0], [0.1, 7347.0], [0.2, 7347.0], [0.3, 7347.0], [0.4, 7347.0], [0.5, 7347.0], [0.6, 7364.0], [0.7, 7364.0], [0.8, 7364.0], [0.9, 7364.0], [1.0, 7364.0], [1.1, 7364.0], [1.2, 7370.0], [1.3, 7370.0], [1.4, 7370.0], [1.5, 7370.0], [1.6, 7370.0], [1.7, 7370.0], [1.8, 7373.0], [1.9, 7373.0], [2.0, 7373.0], [2.1, 7373.0], [2.2, 7373.0], [2.3, 7390.0], [2.4, 7390.0], [2.5, 7390.0], [2.6, 7390.0], [2.7, 7390.0], [2.8, 7390.0], [2.9, 7426.0], [3.0, 7426.0], [3.1, 7426.0], [3.2, 7426.0], [3.3, 7426.0], [3.4, 7426.0], [3.5, 7473.0], [3.6, 7473.0], [3.7, 7473.0], [3.8, 7473.0], [3.9, 7473.0], [4.0, 7473.0], [4.1, 7475.0], [4.2, 7475.0], [4.3, 7475.0], [4.4, 7475.0], [4.5, 7475.0], [4.6, 7477.0], [4.7, 7477.0], [4.8, 7477.0], [4.9, 7477.0], [5.0, 7477.0], [5.1, 7477.0], [5.2, 7479.0], [5.3, 7479.0], [5.4, 7479.0], [5.5, 7479.0], [5.6, 7479.0], [5.7, 7479.0], [5.8, 7570.0], [5.9, 7570.0], [6.0, 7570.0], [6.1, 7570.0], [6.2, 7570.0], [6.3, 7570.0], [6.4, 7583.0], [6.5, 7583.0], [6.6, 7583.0], [6.7, 7583.0], [6.8, 7583.0], [6.9, 8665.0], [7.0, 8665.0], [7.1, 8665.0], [7.2, 8665.0], [7.3, 8665.0], [7.4, 8665.0], [7.5, 8665.0], [7.6, 8665.0], [7.7, 8665.0], [7.8, 8665.0], [7.9, 8665.0], [8.0, 8665.0], [8.1, 8668.0], [8.2, 8668.0], [8.3, 8668.0], [8.4, 8668.0], [8.5, 8668.0], [8.6, 8668.0], [8.7, 9690.0], [8.8, 9690.0], [8.9, 9690.0], [9.0, 9690.0], [9.1, 9690.0], [9.2, 9690.0], [9.3, 9690.0], [9.4, 9690.0], [9.5, 9690.0], [9.6, 9690.0], [9.7, 9690.0], [9.8, 9690.0], [9.9, 9690.0], [10.0, 9690.0], [10.1, 9690.0], [10.2, 9690.0], [10.3, 9690.0], [10.4, 9764.0], [10.5, 9764.0], [10.6, 9764.0], [10.7, 9764.0], [10.8, 9764.0], [10.9, 9764.0], [11.0, 9764.0], [11.1, 9764.0], [11.2, 9764.0], [11.3, 9764.0], [11.4, 9764.0], [11.5, 9859.0], [11.6, 9859.0], [11.7, 9859.0], [11.8, 9859.0], [11.9, 9859.0], [12.0, 9859.0], [12.1, 9859.0], [12.2, 9859.0], [12.3, 9859.0], [12.4, 9859.0], [12.5, 9859.0], [12.6, 9859.0], [12.7, 9864.0], [12.8, 9864.0], [12.9, 9864.0], [13.0, 9864.0], [13.1, 9864.0], [13.2, 9864.0], [13.3, 10031.0], [13.4, 10031.0], [13.5, 10031.0], [13.6, 10031.0], [13.7, 10031.0], [13.8, 10031.0], [13.9, 10031.0], [14.0, 10031.0], [14.1, 10031.0], [14.2, 10031.0], [14.3, 10031.0], [14.4, 10033.0], [14.5, 10033.0], [14.6, 10033.0], [14.7, 10033.0], [14.8, 10033.0], [14.9, 10033.0], [15.0, 10721.0], [15.1, 10721.0], [15.2, 10721.0], [15.3, 10721.0], [15.4, 10721.0], [15.5, 10721.0], [15.6, 10724.0], [15.7, 10724.0], [15.8, 10724.0], [15.9, 10724.0], [16.0, 10724.0], [16.1, 10724.0], [16.2, 10724.0], [16.3, 10724.0], [16.4, 10724.0], [16.5, 10724.0], [16.6, 10724.0], [16.7, 11669.0], [16.8, 11669.0], [16.9, 11669.0], [17.0, 11669.0], [17.1, 11669.0], [17.2, 11669.0], [17.3, 11674.0], [17.4, 11674.0], [17.5, 11674.0], [17.6, 11674.0], [17.7, 11674.0], [17.8, 11674.0], [17.9, 11674.0], [18.0, 11674.0], [18.1, 11674.0], [18.2, 11674.0], [18.3, 11674.0], [18.4, 12091.0], [18.5, 12091.0], [18.6, 12091.0], [18.7, 12091.0], [18.8, 12091.0], [18.9, 12091.0], [19.0, 12092.0], [19.1, 12092.0], [19.2, 12092.0], [19.3, 12092.0], [19.4, 12092.0], [19.5, 12092.0], [19.6, 12092.0], [19.7, 12092.0], [19.8, 12092.0], [19.9, 12092.0], [20.0, 12092.0], [20.1, 12092.0], [20.2, 12094.0], [20.3, 12094.0], [20.4, 12094.0], [20.5, 12094.0], [20.6, 12094.0], [20.7, 12206.0], [20.8, 12206.0], [20.9, 12206.0], [21.0, 12206.0], [21.1, 12206.0], [21.2, 12206.0], [21.3, 12206.0], [21.4, 12206.0], [21.5, 12206.0], [21.6, 12206.0], [21.7, 12206.0], [21.8, 12206.0], [21.9, 12394.0], [22.0, 12394.0], [22.1, 12394.0], [22.2, 12394.0], [22.3, 12394.0], [22.4, 12394.0], [22.5, 12690.0], [22.6, 12690.0], [22.7, 12690.0], [22.8, 12690.0], [22.9, 12690.0], [23.0, 12695.0], [23.1, 12695.0], [23.2, 12695.0], [23.3, 12695.0], [23.4, 12695.0], [23.5, 12695.0], [23.6, 12696.0], [23.7, 12696.0], [23.8, 12696.0], [23.9, 12696.0], [24.0, 12696.0], [24.1, 12696.0], [24.2, 12778.0], [24.3, 12778.0], [24.4, 12778.0], [24.5, 12778.0], [24.6, 12778.0], [24.7, 12778.0], [24.8, 12778.0], [24.9, 12778.0], [25.0, 12778.0], [25.1, 12778.0], [25.2, 12778.0], [25.3, 12778.0], [25.4, 12778.0], [25.5, 12778.0], [25.6, 12778.0], [25.7, 12778.0], [25.8, 12778.0], [25.9, 12784.0], [26.0, 12784.0], [26.1, 12784.0], [26.2, 12784.0], [26.3, 12784.0], [26.4, 12784.0], [26.5, 12784.0], [26.6, 12784.0], [26.7, 12784.0], [26.8, 12784.0], [26.9, 12784.0], [27.0, 12784.0], [27.1, 12957.0], [27.2, 12957.0], [27.3, 12957.0], [27.4, 12957.0], [27.5, 12957.0], [27.6, 12957.0], [27.7, 12957.0], [27.8, 12957.0], [27.9, 12957.0], [28.0, 12957.0], [28.1, 12957.0], [28.2, 12958.0], [28.3, 12958.0], [28.4, 12958.0], [28.5, 12958.0], [28.6, 12958.0], [28.7, 12958.0], [28.8, 12962.0], [28.9, 12962.0], [29.0, 12962.0], [29.1, 12962.0], [29.2, 12962.0], [29.3, 12962.0], [29.4, 12962.0], [29.5, 12962.0], [29.6, 12962.0], [29.7, 12962.0], [29.8, 12962.0], [29.9, 12986.0], [30.0, 12986.0], [30.1, 12986.0], [30.2, 12986.0], [30.3, 12986.0], [30.4, 12986.0], [30.5, 12986.0], [30.6, 12986.0], [30.7, 12986.0], [30.8, 12986.0], [30.9, 12986.0], [31.0, 12986.0], [31.1, 12986.0], [31.2, 12986.0], [31.3, 12986.0], [31.4, 12986.0], [31.5, 12986.0], [31.6, 12986.0], [31.7, 12988.0], [31.8, 12988.0], [31.9, 12988.0], [32.0, 12988.0], [32.1, 12988.0], [32.2, 12989.0], [32.3, 12989.0], [32.4, 12989.0], [32.5, 12989.0], [32.6, 12989.0], [32.7, 12989.0], [32.8, 12997.0], [32.9, 12997.0], [33.0, 12997.0], [33.1, 12997.0], [33.2, 12997.0], [33.3, 12997.0], [33.4, 12997.0], [33.5, 12997.0], [33.6, 12997.0], [33.7, 12997.0], [33.8, 12997.0], [33.9, 12997.0], [34.0, 13001.0], [34.1, 13001.0], [34.2, 13001.0], [34.3, 13001.0], [34.4, 13001.0], [34.5, 13002.0], [34.6, 13002.0], [34.7, 13002.0], [34.8, 13002.0], [34.9, 13002.0], [35.0, 13002.0], [35.1, 13003.0], [35.2, 13003.0], [35.3, 13003.0], [35.4, 13003.0], [35.5, 13003.0], [35.6, 13003.0], [35.7, 13003.0], [35.8, 13003.0], [35.9, 13003.0], [36.0, 13003.0], [36.1, 13003.0], [36.2, 13003.0], [36.3, 13004.0], [36.4, 13004.0], [36.5, 13004.0], [36.6, 13004.0], [36.7, 13004.0], [36.8, 13161.0], [36.9, 13161.0], [37.0, 13161.0], [37.1, 13161.0], [37.2, 13161.0], [37.3, 13161.0], [37.4, 13161.0], [37.5, 13161.0], [37.6, 13161.0], [37.7, 13161.0], [37.8, 13161.0], [37.9, 13161.0], [38.0, 13167.0], [38.1, 13167.0], [38.2, 13167.0], [38.3, 13167.0], [38.4, 13167.0], [38.5, 13167.0], [38.6, 14133.0], [38.7, 14133.0], [38.8, 14133.0], [38.9, 14133.0], [39.0, 14133.0], [39.1, 14133.0], [39.2, 14133.0], [39.3, 14133.0], [39.4, 14133.0], [39.5, 14133.0], [39.6, 14133.0], [39.7, 15192.0], [39.8, 15192.0], [39.9, 15192.0], [40.0, 15192.0], [40.1, 15192.0], [40.2, 15192.0], [40.3, 15193.0], [40.4, 15193.0], [40.5, 15193.0], [40.6, 15193.0], [40.7, 15193.0], [40.8, 15193.0], [40.9, 15193.0], [41.0, 15193.0], [41.1, 15193.0], [41.2, 15193.0], [41.3, 15193.0], [41.4, 15768.0], [41.5, 15768.0], [41.6, 15768.0], [41.7, 15768.0], [41.8, 15768.0], [41.9, 15768.0], [42.0, 15769.0], [42.1, 15769.0], [42.2, 15769.0], [42.3, 15769.0], [42.4, 15769.0], [42.5, 15769.0], [42.6, 16069.0], [42.7, 16069.0], [42.8, 16069.0], [42.9, 16069.0], [43.0, 16069.0], [43.1, 16069.0], [43.2, 16069.0], [43.3, 16069.0], [43.4, 16069.0], [43.5, 16069.0], [43.6, 16069.0], [43.7, 16069.0], [43.8, 16069.0], [43.9, 16069.0], [44.0, 16069.0], [44.1, 16069.0], [44.2, 16069.0], [44.3, 16240.0], [44.4, 16240.0], [44.5, 16240.0], [44.6, 16240.0], [44.7, 16240.0], [44.8, 16240.0], [44.9, 16241.0], [45.0, 16241.0], [45.1, 16241.0], [45.2, 16241.0], [45.3, 16241.0], [45.4, 16241.0], [45.5, 16241.0], [45.6, 16241.0], [45.7, 16241.0], [45.8, 16241.0], [45.9, 16241.0], [46.0, 16347.0], [46.1, 16347.0], [46.2, 16347.0], [46.3, 16347.0], [46.4, 16347.0], [46.5, 16347.0], [46.6, 16352.0], [46.7, 16352.0], [46.8, 16352.0], [46.9, 16352.0], [47.0, 16352.0], [47.1, 16352.0], [47.2, 16352.0], [47.3, 16352.0], [47.4, 16352.0], [47.5, 16352.0], [47.6, 16352.0], [47.7, 16352.0], [47.8, 16773.0], [47.9, 16773.0], [48.0, 16773.0], [48.1, 16773.0], [48.2, 16773.0], [48.3, 16774.0], [48.4, 16774.0], [48.5, 16774.0], [48.6, 16774.0], [48.7, 16774.0], [48.8, 16774.0], [48.9, 16774.0], [49.0, 16774.0], [49.1, 16774.0], [49.2, 16774.0], [49.3, 16774.0], [49.4, 16774.0], [49.5, 16774.0], [49.6, 16774.0], [49.7, 16774.0], [49.8, 16774.0], [49.9, 16774.0], [50.0, 16774.0], [50.1, 16920.0], [50.2, 16920.0], [50.3, 16920.0], [50.4, 16920.0], [50.5, 16920.0], [50.6, 16941.0], [50.7, 16941.0], [50.8, 16941.0], [50.9, 16941.0], [51.0, 16941.0], [51.1, 16941.0], [51.2, 17928.0], [51.3, 17928.0], [51.4, 17928.0], [51.5, 17928.0], [51.6, 17928.0], [51.7, 17928.0], [51.8, 18227.0], [51.9, 18227.0], [52.0, 18227.0], [52.1, 18227.0], [52.2, 18227.0], [52.3, 18227.0], [52.4, 18227.0], [52.5, 18227.0], [52.6, 18227.0], [52.7, 18227.0], [52.8, 18227.0], [52.9, 18227.0], [53.0, 18227.0], [53.1, 18227.0], [53.2, 18227.0], [53.3, 18227.0], [53.4, 18227.0], [53.5, 18643.0], [53.6, 18643.0], [53.7, 18643.0], [53.8, 18643.0], [53.9, 18643.0], [54.0, 18643.0], [54.1, 18644.0], [54.2, 18644.0], [54.3, 18644.0], [54.4, 18644.0], [54.5, 18644.0], [54.6, 18644.0], [54.7, 18644.0], [54.8, 18644.0], [54.9, 18644.0], [55.0, 18644.0], [55.1, 18644.0], [55.2, 18645.0], [55.3, 18645.0], [55.4, 18645.0], [55.5, 18645.0], [55.6, 18645.0], [55.7, 18645.0], [55.8, 18806.0], [55.9, 18806.0], [56.0, 18806.0], [56.1, 18806.0], [56.2, 18806.0], [56.3, 18806.0], [56.4, 20052.0], [56.5, 20052.0], [56.6, 20052.0], [56.7, 20052.0], [56.8, 20052.0], [56.9, 20054.0], [57.0, 20054.0], [57.1, 20054.0], [57.2, 20054.0], [57.3, 20054.0], [57.4, 20054.0], [57.5, 20695.0], [57.6, 20695.0], [57.7, 20695.0], [57.8, 20695.0], [57.9, 20695.0], [58.0, 20695.0], [58.1, 20695.0], [58.2, 20695.0], [58.3, 20695.0], [58.4, 20695.0], [58.5, 20695.0], [58.6, 20695.0], [58.7, 20696.0], [58.8, 20696.0], [58.9, 20696.0], [59.0, 20696.0], [59.1, 20696.0], [59.2, 20697.0], [59.3, 20697.0], [59.4, 20697.0], [59.5, 20697.0], [59.6, 20697.0], [59.7, 20697.0], [59.8, 23753.0], [59.9, 23753.0], [60.0, 23753.0], [60.1, 23753.0], [60.2, 23753.0], [60.3, 23753.0], [60.4, 24281.0], [60.5, 24281.0], [60.6, 24281.0], [60.7, 24281.0], [60.8, 24281.0], [60.9, 24281.0], [61.0, 24282.0], [61.1, 24282.0], [61.2, 24282.0], [61.3, 24282.0], [61.4, 24282.0], [61.5, 24282.0], [61.6, 24282.0], [61.7, 24282.0], [61.8, 24282.0], [61.9, 24282.0], [62.0, 24282.0], [62.1, 24283.0], [62.2, 24283.0], [62.3, 24283.0], [62.4, 24283.0], [62.5, 24283.0], [62.6, 24283.0], [62.7, 24283.0], [62.8, 24283.0], [62.9, 24283.0], [63.0, 24283.0], [63.1, 24283.0], [63.2, 24283.0], [63.3, 26094.0], [63.4, 26094.0], [63.5, 26094.0], [63.6, 26094.0], [63.7, 26094.0], [63.8, 26095.0], [63.9, 26095.0], [64.0, 26095.0], [64.1, 26095.0], [64.2, 26095.0], [64.3, 26095.0], [64.4, 26095.0], [64.5, 26095.0], [64.6, 26095.0], [64.7, 26095.0], [64.8, 26095.0], [64.9, 26095.0], [65.0, 26629.0], [65.1, 26629.0], [65.2, 26629.0], [65.3, 26629.0], [65.4, 26629.0], [65.5, 26629.0], [65.6, 26631.0], [65.7, 26631.0], [65.8, 26631.0], [65.9, 26631.0], [66.0, 26631.0], [66.1, 26632.0], [66.2, 26632.0], [66.3, 26632.0], [66.4, 26632.0], [66.5, 26632.0], [66.6, 26632.0], [66.7, 26633.0], [66.8, 26633.0], [66.9, 26633.0], [67.0, 26633.0], [67.1, 26633.0], [67.2, 26633.0], [67.3, 26641.0], [67.4, 26641.0], [67.5, 26641.0], [67.6, 26641.0], [67.7, 26641.0], [67.8, 26641.0], [67.9, 27309.0], [68.0, 27309.0], [68.1, 27309.0], [68.2, 27309.0], [68.3, 27309.0], [68.4, 27999.0], [68.5, 27999.0], [68.6, 27999.0], [68.7, 27999.0], [68.8, 27999.0], [68.9, 27999.0], [69.0, 28001.0], [69.1, 28001.0], [69.2, 28001.0], [69.3, 28001.0], [69.4, 28001.0], [69.5, 28001.0], [69.6, 28008.0], [69.7, 28008.0], [69.8, 28008.0], [69.9, 28008.0], [70.0, 28008.0], [70.1, 28008.0], [70.2, 28010.0], [70.3, 28010.0], [70.4, 28010.0], [70.5, 28010.0], [70.6, 28010.0], [70.7, 28976.0], [70.8, 28976.0], [70.9, 28976.0], [71.0, 28976.0], [71.1, 28976.0], [71.2, 28976.0], [71.3, 28976.0], [71.4, 28976.0], [71.5, 28976.0], [71.6, 28976.0], [71.7, 28976.0], [71.8, 28976.0], [71.9, 29801.0], [72.0, 29801.0], [72.1, 29801.0], [72.2, 29801.0], [72.3, 29801.0], [72.4, 29801.0], [72.5, 29898.0], [72.6, 29898.0], [72.7, 29898.0], [72.8, 29898.0], [72.9, 29898.0], [73.0, 30221.0], [73.1, 30221.0], [73.2, 30221.0], [73.3, 30221.0], [73.4, 30221.0], [73.5, 30221.0], [73.6, 30222.0], [73.7, 30222.0], [73.8, 30222.0], [73.9, 30222.0], [74.0, 30222.0], [74.1, 30222.0], [74.2, 30222.0], [74.3, 30222.0], [74.4, 30222.0], [74.5, 30222.0], [74.6, 30222.0], [74.7, 30222.0], [74.8, 30222.0], [74.9, 30222.0], [75.0, 30222.0], [75.1, 30222.0], [75.2, 30222.0], [75.3, 30222.0], [75.4, 30222.0], [75.5, 30222.0], [75.6, 30222.0], [75.7, 30222.0], [75.8, 30222.0], [75.9, 31240.0], [76.0, 31240.0], [76.1, 31240.0], [76.2, 31240.0], [76.3, 31240.0], [76.4, 31240.0], [76.5, 31833.0], [76.6, 31833.0], [76.7, 31833.0], [76.8, 31833.0], [76.9, 31833.0], [77.0, 31833.0], [77.1, 31835.0], [77.2, 31835.0], [77.3, 31835.0], [77.4, 31835.0], [77.5, 31835.0], [77.6, 31836.0], [77.7, 31836.0], [77.8, 31836.0], [77.9, 31836.0], [78.0, 31836.0], [78.1, 31836.0], [78.2, 31837.0], [78.3, 31837.0], [78.4, 31837.0], [78.5, 31837.0], [78.6, 31837.0], [78.7, 31837.0], [78.8, 31857.0], [78.9, 31857.0], [79.0, 31857.0], [79.1, 31857.0], [79.2, 31857.0], [79.3, 31857.0], [79.4, 33272.0], [79.5, 33272.0], [79.6, 33272.0], [79.7, 33272.0], [79.8, 33272.0], [79.9, 33273.0], [80.0, 33273.0], [80.1, 33273.0], [80.2, 33273.0], [80.3, 33273.0], [80.4, 33273.0], [80.5, 33273.0], [80.6, 33273.0], [80.7, 33273.0], [80.8, 33273.0], [80.9, 33273.0], [81.0, 33273.0], [81.1, 33275.0], [81.2, 33275.0], [81.3, 33275.0], [81.4, 33275.0], [81.5, 33275.0], [81.6, 33275.0], [81.7, 33790.0], [81.8, 33790.0], [81.9, 33790.0], [82.0, 33790.0], [82.1, 33790.0], [82.2, 33791.0], [82.3, 33791.0], [82.4, 33791.0], [82.5, 33791.0], [82.6, 33791.0], [82.7, 33791.0], [82.8, 33805.0], [82.9, 33805.0], [83.0, 33805.0], [83.1, 33805.0], [83.2, 33805.0], [83.3, 33805.0], [83.4, 33805.0], [83.5, 33805.0], [83.6, 33805.0], [83.7, 33805.0], [83.8, 33805.0], [83.9, 33805.0], [84.0, 33806.0], [84.1, 33806.0], [84.2, 33806.0], [84.3, 33806.0], [84.4, 33806.0], [84.5, 33806.0], [84.6, 33806.0], [84.7, 33806.0], [84.8, 33806.0], [84.9, 33806.0], [85.0, 33806.0], [85.1, 33997.0], [85.2, 33997.0], [85.3, 33997.0], [85.4, 33997.0], [85.5, 33997.0], [85.6, 33997.0], [85.7, 33997.0], [85.8, 33997.0], [85.9, 33997.0], [86.0, 33997.0], [86.1, 33997.0], [86.2, 33997.0], [86.3, 34901.0], [86.4, 34901.0], [86.5, 34901.0], [86.6, 34901.0], [86.7, 34901.0], [86.8, 34906.0], [86.9, 34906.0], [87.0, 34906.0], [87.1, 34906.0], [87.2, 34906.0], [87.3, 34906.0], [87.4, 34907.0], [87.5, 34907.0], [87.6, 34907.0], [87.7, 34907.0], [87.8, 34907.0], [87.9, 34907.0], [88.0, 34907.0], [88.1, 34907.0], [88.2, 34907.0], [88.3, 34907.0], [88.4, 34907.0], [88.5, 34907.0], [88.6, 35718.0], [88.7, 35718.0], [88.8, 35718.0], [88.9, 35718.0], [89.0, 35718.0], [89.1, 35721.0], [89.2, 35721.0], [89.3, 35721.0], [89.4, 35721.0], [89.5, 35721.0], [89.6, 35721.0], [89.7, 35744.0], [89.8, 35744.0], [89.9, 35744.0], [90.0, 35744.0], [90.1, 35744.0], [90.2, 35744.0], [90.3, 36249.0], [90.4, 36249.0], [90.5, 36249.0], [90.6, 36249.0], [90.7, 36249.0], [90.8, 36249.0], [90.9, 36249.0], [91.0, 36249.0], [91.1, 36249.0], [91.2, 36249.0], [91.3, 36249.0], [91.4, 36250.0], [91.5, 36250.0], [91.6, 36250.0], [91.7, 36250.0], [91.8, 36250.0], [91.9, 36250.0], [92.0, 41261.0], [92.1, 41261.0], [92.2, 41261.0], [92.3, 41261.0], [92.4, 41261.0], [92.5, 41261.0], [92.6, 41267.0], [92.7, 41267.0], [92.8, 41267.0], [92.9, 41267.0], [93.0, 41267.0], [93.1, 41267.0], [93.2, 41273.0], [93.3, 41273.0], [93.4, 41273.0], [93.5, 41273.0], [93.6, 41273.0], [93.7, 41276.0], [93.8, 41276.0], [93.9, 41276.0], [94.0, 41276.0], [94.1, 41276.0], [94.2, 41276.0], [94.3, 41276.0], [94.4, 41276.0], [94.5, 41276.0], [94.6, 41276.0], [94.7, 41276.0], [94.8, 41276.0], [94.9, 42292.0], [95.0, 42292.0], [95.1, 42292.0], [95.2, 42292.0], [95.3, 42292.0], [95.4, 42292.0], [95.5, 42292.0], [95.6, 42292.0], [95.7, 42292.0], [95.8, 42292.0], [95.9, 42292.0], [96.0, 42292.0], [96.1, 42292.0], [96.2, 42292.0], [96.3, 42292.0], [96.4, 42292.0], [96.5, 42292.0], [96.6, 42293.0], [96.7, 42293.0], [96.8, 42293.0], [96.9, 42293.0], [97.0, 42293.0], [97.1, 42293.0], [97.2, 43783.0], [97.3, 43783.0], [97.4, 43783.0], [97.5, 43783.0], [97.6, 43783.0], [97.7, 43783.0], [97.8, 44462.0], [97.9, 44462.0], [98.0, 44462.0], [98.1, 44462.0], [98.2, 44462.0], [98.3, 47577.0], [98.4, 47577.0], [98.5, 47577.0], [98.6, 47577.0], [98.7, 47577.0], [98.8, 47577.0], [98.9, 47578.0], [99.0, 47578.0], [99.1, 47578.0], [99.2, 47578.0], [99.3, 47578.0], [99.4, 47578.0], [99.5, 47578.0], [99.6, 47578.0], [99.7, 47578.0], [99.8, 47578.0], [99.9, 47578.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7300.0, "maxY": 12.0, "series": [{"data": [[7400.0, 5.0], [7300.0, 5.0], [7500.0, 2.0], [8600.0, 3.0], [9700.0, 2.0], [9600.0, 3.0], [10000.0, 3.0], [9800.0, 3.0], [10700.0, 3.0], [11600.0, 3.0], [12000.0, 4.0], [12200.0, 2.0], [12300.0, 1.0], [12700.0, 5.0], [12600.0, 3.0], [13100.0, 3.0], [12900.0, 12.0], [13000.0, 5.0], [14100.0, 2.0], [15100.0, 3.0], [15700.0, 2.0], [16300.0, 3.0], [16000.0, 3.0], [16200.0, 3.0], [16700.0, 4.0], [16900.0, 2.0], [18200.0, 3.0], [17900.0, 1.0], [18800.0, 1.0], [18600.0, 4.0], [20000.0, 2.0], [20600.0, 4.0], [23700.0, 1.0], [24200.0, 5.0], [26000.0, 3.0], [26600.0, 5.0], [27300.0, 1.0], [28000.0, 3.0], [27900.0, 1.0], [28900.0, 2.0], [30200.0, 5.0], [29800.0, 2.0], [31200.0, 1.0], [31800.0, 5.0], [33900.0, 2.0], [33700.0, 2.0], [33800.0, 4.0], [33200.0, 4.0], [35700.0, 3.0], [36200.0, 3.0], [34900.0, 4.0], [41200.0, 5.0], [42200.0, 4.0], [44400.0, 1.0], [43700.0, 1.0], [47500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 47500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 174.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 174.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 174.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.764705882352941, "minX": 1.58917128E12, "maxY": 41.50588235294117, "series": [{"data": [[1.58917128E12, 3.764705882352941], [1.58917134E12, 28.444444444444446], [1.5891714E12, 41.50588235294117]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891714E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7406.2, "minX": 1.0, "maxY": 46798.75, "series": [{"data": [[2.0, 7406.2], [32.0, 13968.366666666665], [34.0, 35634.75], [37.0, 33997.0], [39.0, 35727.666666666664], [44.0, 31839.6], [49.0, 30221.5], [48.0, 30222.0], [51.0, 26629.0], [54.0, 26634.25], [59.0, 24282.2], [63.0, 22224.5], [62.0, 20695.0], [4.0, 20561.545454545456], [64.0, 20599.515151515156], [7.0, 43783.0], [8.0, 11350.0], [9.0, 46798.75], [14.0, 32578.8], [1.0, 7408.0], [16.0, 11708.333333333334], [18.0, 32523.0], [19.0, 33805.333333333336], [24.0, 33903.8], [29.0, 41270.6], [30.0, 33790.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[32.41379310344827, 21266.948275862072]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 88.4, "minX": 1.58917128E12, "maxY": 89478.03333333334, "series": [{"data": [[1.58917128E12, 88.4], [1.58917134E12, 374.4], [1.5891714E12, 442.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58917128E12, 17895.266666666666], [1.58917134E12, 75792.85], [1.5891714E12, 89478.03333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891714E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8463.058823529413, "minX": 1.58917128E12, "maxY": 30635.31764705882, "series": [{"data": [[1.58917128E12, 8463.058823529413], [1.58917134E12, 13230.208333333334], [1.5891714E12, 30635.31764705882]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891714E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8462.705882352942, "minX": 1.58917128E12, "maxY": 30635.24705882353, "series": [{"data": [[1.58917128E12, 8462.705882352942], [1.58917134E12, 13230.194444444447], [1.5891714E12, 30635.24705882353]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891714E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.58917128E12, "maxY": 5.635294117647057, "series": [{"data": [[1.58917128E12, 3.7647058823529407], [1.58917134E12, 2.8333333333333335], [1.5891714E12, 5.635294117647057]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891714E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7347.0, "minX": 1.58917128E12, "maxY": 47578.0, "series": [{"data": [[1.58917128E12, 11674.0], [1.58917134E12, 18227.0], [1.5891714E12, 47578.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58917128E12, 7347.0], [1.58917134E12, 8665.0], [1.5891714E12, 16240.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58917128E12, 11674.0], [1.58917134E12, 16774.0], [1.5891714E12, 42292.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58917128E12, 11674.0], [1.58917134E12, 18227.0], [1.5891714E12, 47578.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58917128E12, 11674.0], [1.58917134E12, 17391.09999999999], [1.5891714E12, 44258.3]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891714E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7449.5, "minX": 1.0, "maxY": 42292.0, "series": [{"data": [[1.0, 7449.5], [4.0, 42292.0], [9.0, 16774.0], [5.0, 24282.0], [3.0, 9947.5], [6.0, 9694.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7448.0, "minX": 1.0, "maxY": 42292.0, "series": [{"data": [[1.0, 7448.0], [4.0, 42292.0], [9.0, 16774.0], [5.0, 24282.0], [3.0, 9947.5], [6.0, 9694.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917122E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.58917128E12, 0.4], [1.58917134E12, 2.1333333333333333], [1.58917122E12, 0.016666666666666666], [1.5891714E12, 0.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891714E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.58917128E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.58917128E12, 0.2833333333333333], [1.58917134E12, 1.2], [1.5891714E12, 1.4166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891714E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.58917128E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.58917128E12, 0.2833333333333333], [1.58917134E12, 1.2], [1.5891714E12, 1.4166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891714E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.58917128E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.58917128E12, 0.2833333333333333], [1.58917134E12, 1.2], [1.5891714E12, 1.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891714E12, "title": "Total Transactions Per Second"}},
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

