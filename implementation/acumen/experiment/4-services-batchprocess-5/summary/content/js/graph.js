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
        data: {"result": {"minY": 4507.0, "minX": 0.0, "maxY": 120010.0, "series": [{"data": [[0.0, 4507.0], [0.1, 4507.0], [0.2, 4507.0], [0.3, 4507.0], [0.4, 4507.0], [0.5, 4507.0], [0.6, 4507.0], [0.7, 5325.0], [0.8, 5325.0], [0.9, 5325.0], [1.0, 5325.0], [1.1, 5325.0], [1.2, 5325.0], [1.3, 6244.0], [1.4, 6244.0], [1.5, 6244.0], [1.6, 6244.0], [1.7, 6244.0], [1.8, 6244.0], [1.9, 6244.0], [2.0, 6685.0], [2.1, 6685.0], [2.2, 6685.0], [2.3, 6685.0], [2.4, 6685.0], [2.5, 6685.0], [2.6, 6798.0], [2.7, 6798.0], [2.8, 6798.0], [2.9, 6798.0], [3.0, 6798.0], [3.1, 6798.0], [3.2, 6798.0], [3.3, 7568.0], [3.4, 7568.0], [3.5, 7568.0], [3.6, 7568.0], [3.7, 7568.0], [3.8, 7568.0], [3.9, 7569.0], [4.0, 7569.0], [4.1, 7569.0], [4.2, 7569.0], [4.3, 7569.0], [4.4, 7569.0], [4.5, 8595.0], [4.6, 8595.0], [4.7, 8595.0], [4.8, 8595.0], [4.9, 8595.0], [5.0, 8595.0], [5.1, 8595.0], [5.2, 8595.0], [5.3, 8595.0], [5.4, 8595.0], [5.5, 8595.0], [5.6, 8595.0], [5.7, 8595.0], [5.8, 8595.0], [5.9, 8595.0], [6.0, 8595.0], [6.1, 8595.0], [6.2, 8595.0], [6.3, 8595.0], [6.4, 8595.0], [6.5, 9320.0], [6.6, 9320.0], [6.7, 9320.0], [6.8, 9320.0], [6.9, 9320.0], [7.0, 9320.0], [7.1, 9320.0], [7.2, 9320.0], [7.3, 9320.0], [7.4, 9320.0], [7.5, 9320.0], [7.6, 9320.0], [7.7, 9321.0], [7.8, 9321.0], [7.9, 9321.0], [8.0, 9321.0], [8.1, 9321.0], [8.2, 9321.0], [8.3, 9321.0], [8.4, 9345.0], [8.5, 9345.0], [8.6, 9345.0], [8.7, 9345.0], [8.8, 9345.0], [8.9, 9345.0], [9.0, 9346.0], [9.1, 9346.0], [9.2, 9346.0], [9.3, 9346.0], [9.4, 9346.0], [9.5, 9346.0], [9.6, 9346.0], [9.7, 9452.0], [9.8, 9452.0], [9.9, 9452.0], [10.0, 9452.0], [10.1, 9452.0], [10.2, 9452.0], [10.3, 9508.0], [10.4, 9508.0], [10.5, 9508.0], [10.6, 9508.0], [10.7, 9508.0], [10.8, 9508.0], [10.9, 9517.0], [11.0, 9517.0], [11.1, 9517.0], [11.2, 9517.0], [11.3, 9517.0], [11.4, 9517.0], [11.5, 9517.0], [11.6, 9522.0], [11.7, 9522.0], [11.8, 9522.0], [11.9, 9522.0], [12.0, 9522.0], [12.1, 9522.0], [12.2, 9522.0], [12.3, 9522.0], [12.4, 9522.0], [12.5, 9522.0], [12.6, 9522.0], [12.7, 9522.0], [12.8, 9522.0], [12.9, 9524.0], [13.0, 9524.0], [13.1, 9524.0], [13.2, 9524.0], [13.3, 9524.0], [13.4, 9524.0], [13.5, 9603.0], [13.6, 9603.0], [13.7, 9603.0], [13.8, 9603.0], [13.9, 9603.0], [14.0, 9603.0], [14.1, 9603.0], [14.2, 9606.0], [14.3, 9606.0], [14.4, 9606.0], [14.5, 9606.0], [14.6, 9606.0], [14.7, 9606.0], [14.8, 9642.0], [14.9, 9642.0], [15.0, 9642.0], [15.1, 9642.0], [15.2, 9642.0], [15.3, 9642.0], [15.4, 9816.0], [15.5, 9816.0], [15.6, 9816.0], [15.7, 9816.0], [15.8, 9816.0], [15.9, 9816.0], [16.0, 9816.0], [16.1, 10442.0], [16.2, 10442.0], [16.3, 10442.0], [16.4, 10442.0], [16.5, 10442.0], [16.6, 10442.0], [16.7, 10442.0], [16.8, 10442.0], [16.9, 10442.0], [17.0, 10442.0], [17.1, 10442.0], [17.2, 10442.0], [17.3, 10442.0], [17.4, 10442.0], [17.5, 10442.0], [17.6, 10442.0], [17.7, 10442.0], [17.8, 10442.0], [17.9, 10442.0], [18.0, 10442.0], [18.1, 10442.0], [18.2, 10442.0], [18.3, 10442.0], [18.4, 10442.0], [18.5, 10442.0], [18.6, 10444.0], [18.7, 10444.0], [18.8, 10444.0], [18.9, 10444.0], [19.0, 10444.0], [19.1, 10444.0], [19.2, 10444.0], [19.3, 11062.0], [19.4, 11062.0], [19.5, 11062.0], [19.6, 11062.0], [19.7, 11062.0], [19.8, 11062.0], [19.9, 11062.0], [20.0, 11062.0], [20.1, 11062.0], [20.2, 11062.0], [20.3, 11062.0], [20.4, 11062.0], [20.5, 11062.0], [20.6, 11071.0], [20.7, 11071.0], [20.8, 11071.0], [20.9, 11071.0], [21.0, 11071.0], [21.1, 11071.0], [21.2, 11464.0], [21.3, 11464.0], [21.4, 11464.0], [21.5, 11464.0], [21.6, 11464.0], [21.7, 11464.0], [21.8, 11572.0], [21.9, 11572.0], [22.0, 11572.0], [22.1, 11572.0], [22.2, 11572.0], [22.3, 11572.0], [22.4, 11572.0], [22.5, 11574.0], [22.6, 11574.0], [22.7, 11574.0], [22.8, 11574.0], [22.9, 11574.0], [23.0, 11574.0], [23.1, 11576.0], [23.2, 11576.0], [23.3, 11576.0], [23.4, 11576.0], [23.5, 11576.0], [23.6, 11576.0], [23.7, 11576.0], [23.8, 11694.0], [23.9, 11694.0], [24.0, 11694.0], [24.1, 11694.0], [24.2, 11694.0], [24.3, 11694.0], [24.4, 11694.0], [24.5, 11694.0], [24.6, 11694.0], [24.7, 11694.0], [24.8, 11694.0], [24.9, 11694.0], [25.0, 11694.0], [25.1, 11884.0], [25.2, 11884.0], [25.3, 11884.0], [25.4, 11884.0], [25.5, 11884.0], [25.6, 11884.0], [25.7, 11884.0], [25.8, 11884.0], [25.9, 11884.0], [26.0, 11884.0], [26.1, 11884.0], [26.2, 11884.0], [26.3, 12145.0], [26.4, 12145.0], [26.5, 12145.0], [26.6, 12145.0], [26.7, 12145.0], [26.8, 12145.0], [26.9, 12145.0], [27.0, 12492.0], [27.1, 12492.0], [27.2, 12492.0], [27.3, 12492.0], [27.4, 12492.0], [27.5, 12492.0], [27.6, 12493.0], [27.7, 12493.0], [27.8, 12493.0], [27.9, 12493.0], [28.0, 12493.0], [28.1, 12493.0], [28.2, 12493.0], [28.3, 12493.0], [28.4, 12493.0], [28.5, 12493.0], [28.6, 12493.0], [28.7, 12493.0], [28.8, 12493.0], [28.9, 12494.0], [29.0, 12494.0], [29.1, 12494.0], [29.2, 12494.0], [29.3, 12494.0], [29.4, 12494.0], [29.5, 12494.0], [29.6, 12494.0], [29.7, 12494.0], [29.8, 12494.0], [29.9, 12494.0], [30.0, 12494.0], [30.1, 12494.0], [30.2, 12514.0], [30.3, 12514.0], [30.4, 12514.0], [30.5, 12514.0], [30.6, 12514.0], [30.7, 12514.0], [30.8, 12515.0], [30.9, 12515.0], [31.0, 12515.0], [31.1, 12515.0], [31.2, 12515.0], [31.3, 12515.0], [31.4, 12515.0], [31.5, 12515.0], [31.6, 12515.0], [31.7, 12515.0], [31.8, 12515.0], [31.9, 12515.0], [32.0, 12515.0], [32.1, 12515.0], [32.2, 12515.0], [32.3, 12515.0], [32.4, 12515.0], [32.5, 12515.0], [32.6, 12515.0], [32.7, 12515.0], [32.8, 12515.0], [32.9, 12515.0], [33.0, 12515.0], [33.1, 12515.0], [33.2, 12515.0], [33.3, 12515.0], [33.4, 12599.0], [33.5, 12599.0], [33.6, 12599.0], [33.7, 12599.0], [33.8, 12599.0], [33.9, 12599.0], [34.0, 12600.0], [34.1, 12600.0], [34.2, 12600.0], [34.3, 12600.0], [34.4, 12600.0], [34.5, 12600.0], [34.6, 12600.0], [34.7, 12600.0], [34.8, 12600.0], [34.9, 12600.0], [35.0, 12600.0], [35.1, 12600.0], [35.2, 12600.0], [35.3, 12600.0], [35.4, 12600.0], [35.5, 12600.0], [35.6, 12600.0], [35.7, 12600.0], [35.8, 12600.0], [35.9, 12601.0], [36.0, 12601.0], [36.1, 12601.0], [36.2, 12601.0], [36.3, 12601.0], [36.4, 12601.0], [36.5, 12601.0], [36.6, 12692.0], [36.7, 12692.0], [36.8, 12692.0], [36.9, 12692.0], [37.0, 12692.0], [37.1, 12692.0], [37.2, 12693.0], [37.3, 12693.0], [37.4, 12693.0], [37.5, 12693.0], [37.6, 12693.0], [37.7, 12693.0], [37.8, 12693.0], [37.9, 12694.0], [38.0, 12694.0], [38.1, 12694.0], [38.2, 12694.0], [38.3, 12694.0], [38.4, 12694.0], [38.5, 12694.0], [38.6, 12694.0], [38.7, 12694.0], [38.8, 12694.0], [38.9, 12694.0], [39.0, 12694.0], [39.1, 12694.0], [39.2, 12694.0], [39.3, 12694.0], [39.4, 12694.0], [39.5, 12694.0], [39.6, 12694.0], [39.7, 12694.0], [39.8, 12797.0], [39.9, 12797.0], [40.0, 12797.0], [40.1, 12797.0], [40.2, 12797.0], [40.3, 12797.0], [40.4, 12797.0], [40.5, 12797.0], [40.6, 12797.0], [40.7, 12797.0], [40.8, 12797.0], [40.9, 12797.0], [41.0, 12797.0], [41.1, 12798.0], [41.2, 12798.0], [41.3, 12798.0], [41.4, 12798.0], [41.5, 12798.0], [41.6, 12798.0], [41.7, 12798.0], [41.8, 12798.0], [41.9, 12798.0], [42.0, 12798.0], [42.1, 12798.0], [42.2, 12798.0], [42.3, 12798.0], [42.4, 12798.0], [42.5, 12798.0], [42.6, 12798.0], [42.7, 12798.0], [42.8, 12798.0], [42.9, 12798.0], [43.0, 12799.0], [43.1, 12799.0], [43.2, 12799.0], [43.3, 12799.0], [43.4, 12799.0], [43.5, 12799.0], [43.6, 12800.0], [43.7, 12800.0], [43.8, 12800.0], [43.9, 12800.0], [44.0, 12800.0], [44.1, 12800.0], [44.2, 12800.0], [44.3, 12800.0], [44.4, 12800.0], [44.5, 12800.0], [44.6, 12800.0], [44.7, 12800.0], [44.8, 12800.0], [44.9, 12800.0], [45.0, 12800.0], [45.1, 12800.0], [45.2, 12800.0], [45.3, 12800.0], [45.4, 12800.0], [45.5, 12800.0], [45.6, 12810.0], [45.7, 12810.0], [45.8, 12810.0], [45.9, 12810.0], [46.0, 12810.0], [46.1, 12810.0], [46.2, 12811.0], [46.3, 12811.0], [46.4, 12811.0], [46.5, 12811.0], [46.6, 12811.0], [46.7, 12811.0], [46.8, 12830.0], [46.9, 12830.0], [47.0, 12830.0], [47.1, 12830.0], [47.2, 12830.0], [47.3, 12830.0], [47.4, 12830.0], [47.5, 12833.0], [47.6, 12833.0], [47.7, 12833.0], [47.8, 12833.0], [47.9, 12833.0], [48.0, 12833.0], [48.1, 12834.0], [48.2, 12834.0], [48.3, 12834.0], [48.4, 12834.0], [48.5, 12834.0], [48.6, 12834.0], [48.7, 12834.0], [48.8, 12888.0], [48.9, 12888.0], [49.0, 12888.0], [49.1, 12888.0], [49.2, 12888.0], [49.3, 12888.0], [49.4, 12889.0], [49.5, 12889.0], [49.6, 12889.0], [49.7, 12889.0], [49.8, 12889.0], [49.9, 12889.0], [50.0, 12889.0], [50.1, 12890.0], [50.2, 12890.0], [50.3, 12890.0], [50.4, 12890.0], [50.5, 12890.0], [50.6, 12890.0], [50.7, 12899.0], [50.8, 12899.0], [50.9, 12899.0], [51.0, 12899.0], [51.1, 12899.0], [51.2, 12899.0], [51.3, 12899.0], [51.4, 12899.0], [51.5, 12899.0], [51.6, 12899.0], [51.7, 12899.0], [51.8, 12899.0], [51.9, 12899.0], [52.0, 12899.0], [52.1, 12899.0], [52.2, 12899.0], [52.3, 12899.0], [52.4, 12899.0], [52.5, 12899.0], [52.6, 12899.0], [52.7, 12899.0], [52.8, 12899.0], [52.9, 12899.0], [53.0, 12899.0], [53.1, 12899.0], [53.2, 12899.0], [53.3, 12900.0], [53.4, 12900.0], [53.5, 12900.0], [53.6, 12900.0], [53.7, 12900.0], [53.8, 12900.0], [53.9, 12903.0], [54.0, 12903.0], [54.1, 12903.0], [54.2, 12903.0], [54.3, 12903.0], [54.4, 12903.0], [54.5, 12903.0], [54.6, 12903.0], [54.7, 12903.0], [54.8, 12903.0], [54.9, 12903.0], [55.0, 12903.0], [55.1, 12903.0], [55.2, 12903.0], [55.3, 12903.0], [55.4, 12903.0], [55.5, 12903.0], [55.6, 12903.0], [55.7, 12903.0], [55.8, 12908.0], [55.9, 12908.0], [56.0, 12908.0], [56.1, 12908.0], [56.2, 12908.0], [56.3, 12908.0], [56.4, 12908.0], [56.5, 12908.0], [56.6, 12908.0], [56.7, 12908.0], [56.8, 12908.0], [56.9, 12908.0], [57.0, 12908.0], [57.1, 12915.0], [57.2, 12915.0], [57.3, 12915.0], [57.4, 12915.0], [57.5, 12915.0], [57.6, 12915.0], [57.7, 12915.0], [57.8, 12915.0], [57.9, 12915.0], [58.0, 12915.0], [58.1, 12915.0], [58.2, 12915.0], [58.3, 12915.0], [58.4, 12915.0], [58.5, 12915.0], [58.6, 12915.0], [58.7, 12915.0], [58.8, 12915.0], [58.9, 12915.0], [59.0, 12950.0], [59.1, 12950.0], [59.2, 12950.0], [59.3, 12950.0], [59.4, 12950.0], [59.5, 12950.0], [59.6, 12950.0], [59.7, 12951.0], [59.8, 12951.0], [59.9, 12951.0], [60.0, 12951.0], [60.1, 12951.0], [60.2, 12951.0], [60.3, 12952.0], [60.4, 12952.0], [60.5, 12952.0], [60.6, 12952.0], [60.7, 12952.0], [60.8, 12952.0], [60.9, 12952.0], [61.0, 12952.0], [61.1, 12952.0], [61.2, 12952.0], [61.3, 12952.0], [61.4, 12952.0], [61.5, 12952.0], [61.6, 12952.0], [61.7, 12952.0], [61.8, 12952.0], [61.9, 12952.0], [62.0, 12952.0], [62.1, 12952.0], [62.2, 12999.0], [62.3, 12999.0], [62.4, 12999.0], [62.5, 12999.0], [62.6, 12999.0], [62.7, 12999.0], [62.8, 12999.0], [62.9, 13001.0], [63.0, 13001.0], [63.1, 13001.0], [63.2, 13001.0], [63.3, 13001.0], [63.4, 13001.0], [63.5, 13001.0], [63.6, 13001.0], [63.7, 13001.0], [63.8, 13001.0], [63.9, 13001.0], [64.0, 13001.0], [64.1, 13001.0], [64.2, 13003.0], [64.3, 13003.0], [64.4, 13003.0], [64.5, 13003.0], [64.6, 13003.0], [64.7, 13003.0], [64.8, 13004.0], [64.9, 13004.0], [65.0, 13004.0], [65.1, 13004.0], [65.2, 13004.0], [65.3, 13004.0], [65.4, 13004.0], [65.5, 13004.0], [65.6, 13004.0], [65.7, 13004.0], [65.8, 13004.0], [65.9, 13004.0], [66.0, 13004.0], [66.1, 13004.0], [66.2, 13004.0], [66.3, 13004.0], [66.4, 13004.0], [66.5, 13004.0], [66.6, 13004.0], [66.7, 13006.0], [66.8, 13006.0], [66.9, 13006.0], [67.0, 13006.0], [67.1, 13006.0], [67.2, 13006.0], [67.3, 13006.0], [67.4, 13009.0], [67.5, 13009.0], [67.6, 13009.0], [67.7, 13009.0], [67.8, 13009.0], [67.9, 13009.0], [68.0, 13011.0], [68.1, 13011.0], [68.2, 13011.0], [68.3, 13011.0], [68.4, 13011.0], [68.5, 13011.0], [68.6, 13011.0], [68.7, 13011.0], [68.8, 13011.0], [68.9, 13011.0], [69.0, 13011.0], [69.1, 13011.0], [69.2, 13011.0], [69.3, 13011.0], [69.4, 13011.0], [69.5, 13011.0], [69.6, 13011.0], [69.7, 13011.0], [69.8, 13011.0], [69.9, 13011.0], [70.0, 13011.0], [70.1, 13011.0], [70.2, 13011.0], [70.3, 13011.0], [70.4, 13011.0], [70.5, 13011.0], [70.6, 13012.0], [70.7, 13012.0], [70.8, 13012.0], [70.9, 13012.0], [71.0, 13012.0], [71.1, 13012.0], [71.2, 13012.0], [71.3, 13012.0], [71.4, 13012.0], [71.5, 13012.0], [71.6, 13012.0], [71.7, 13012.0], [71.8, 13018.0], [71.9, 13018.0], [72.0, 13018.0], [72.1, 13018.0], [72.2, 13018.0], [72.3, 13018.0], [72.4, 13018.0], [72.5, 13019.0], [72.6, 13019.0], [72.7, 13019.0], [72.8, 13019.0], [72.9, 13019.0], [73.0, 13019.0], [73.1, 13019.0], [73.2, 13019.0], [73.3, 13019.0], [73.4, 13019.0], [73.5, 13019.0], [73.6, 13019.0], [73.7, 13019.0], [73.8, 13019.0], [73.9, 13019.0], [74.0, 13019.0], [74.1, 13019.0], [74.2, 13019.0], [74.3, 13019.0], [74.4, 13019.0], [74.5, 13019.0], [74.6, 13019.0], [74.7, 13019.0], [74.8, 13019.0], [74.9, 13019.0], [75.0, 13051.0], [75.1, 13051.0], [75.2, 13051.0], [75.3, 13051.0], [75.4, 13051.0], [75.5, 13051.0], [75.6, 13051.0], [75.7, 13051.0], [75.8, 13051.0], [75.9, 13051.0], [76.0, 13051.0], [76.1, 13051.0], [76.2, 13051.0], [76.3, 13051.0], [76.4, 13051.0], [76.5, 13051.0], [76.6, 13051.0], [76.7, 13051.0], [76.8, 13051.0], [76.9, 13051.0], [77.0, 13051.0], [77.1, 13051.0], [77.2, 13051.0], [77.3, 13051.0], [77.4, 13051.0], [77.5, 13051.0], [77.6, 13053.0], [77.7, 13053.0], [77.8, 13053.0], [77.9, 13053.0], [78.0, 13053.0], [78.1, 13053.0], [78.2, 13053.0], [78.3, 13107.0], [78.4, 13107.0], [78.5, 13107.0], [78.6, 13107.0], [78.7, 13107.0], [78.8, 13107.0], [78.9, 13108.0], [79.0, 13108.0], [79.1, 13108.0], [79.2, 13108.0], [79.3, 13108.0], [79.4, 13108.0], [79.5, 13108.0], [79.6, 13108.0], [79.7, 13108.0], [79.8, 13108.0], [79.9, 13108.0], [80.0, 13108.0], [80.1, 13108.0], [80.2, 13117.0], [80.3, 13117.0], [80.4, 13117.0], [80.5, 13117.0], [80.6, 13117.0], [80.7, 13117.0], [80.8, 13117.0], [80.9, 13117.0], [81.0, 13117.0], [81.1, 13117.0], [81.2, 13117.0], [81.3, 13117.0], [81.4, 13117.0], [81.5, 13213.0], [81.6, 13213.0], [81.7, 13213.0], [81.8, 13213.0], [81.9, 13213.0], [82.0, 13213.0], [82.1, 13214.0], [82.2, 13214.0], [82.3, 13214.0], [82.4, 13214.0], [82.5, 13214.0], [82.6, 13214.0], [82.7, 13214.0], [82.8, 13214.0], [82.9, 13214.0], [83.0, 13214.0], [83.1, 13214.0], [83.2, 13214.0], [83.3, 13214.0], [83.4, 13214.0], [83.5, 13214.0], [83.6, 13214.0], [83.7, 13214.0], [83.8, 13214.0], [83.9, 13214.0], [84.0, 13215.0], [84.1, 13215.0], [84.2, 13215.0], [84.3, 13215.0], [84.4, 13215.0], [84.5, 13215.0], [84.6, 13215.0], [84.7, 13725.0], [84.8, 13725.0], [84.9, 13725.0], [85.0, 13725.0], [85.1, 13725.0], [85.2, 13725.0], [85.3, 13725.0], [85.4, 13725.0], [85.5, 13725.0], [85.6, 13725.0], [85.7, 13725.0], [85.8, 13725.0], [85.9, 14628.0], [86.0, 14628.0], [86.1, 14628.0], [86.2, 14628.0], [86.3, 14628.0], [86.4, 14628.0], [86.5, 14628.0], [86.6, 14628.0], [86.7, 14628.0], [86.8, 14628.0], [86.9, 14628.0], [87.0, 14628.0], [87.1, 14628.0], [87.2, 14628.0], [87.3, 14628.0], [87.4, 14628.0], [87.5, 14628.0], [87.6, 14628.0], [87.7, 14628.0], [87.8, 14628.0], [87.9, 14629.0], [88.0, 14629.0], [88.1, 14629.0], [88.2, 14629.0], [88.3, 14629.0], [88.4, 14629.0], [88.5, 14629.0], [88.6, 14629.0], [88.7, 14629.0], [88.8, 14629.0], [88.9, 14629.0], [89.0, 14629.0], [89.1, 14629.0], [89.2, 14630.0], [89.3, 14630.0], [89.4, 14630.0], [89.5, 14630.0], [89.6, 14630.0], [89.7, 14630.0], [89.8, 14630.0], [89.9, 14630.0], [90.0, 14630.0], [90.1, 14630.0], [90.2, 14630.0], [90.3, 14630.0], [90.4, 14648.0], [90.5, 14648.0], [90.6, 14648.0], [90.7, 14648.0], [90.8, 14648.0], [90.9, 14648.0], [91.0, 14648.0], [91.1, 14745.0], [91.2, 14745.0], [91.3, 14745.0], [91.4, 14745.0], [91.5, 14745.0], [91.6, 14745.0], [91.7, 14745.0], [91.8, 14745.0], [91.9, 14745.0], [92.0, 14745.0], [92.1, 14745.0], [92.2, 14745.0], [92.3, 14745.0], [92.4, 14746.0], [92.5, 14746.0], [92.6, 14746.0], [92.7, 14746.0], [92.8, 14746.0], [92.9, 14746.0], [93.0, 14852.0], [93.1, 14852.0], [93.2, 14852.0], [93.3, 14852.0], [93.4, 14852.0], [93.5, 14852.0], [93.6, 14853.0], [93.7, 14853.0], [93.8, 14853.0], [93.9, 14853.0], [94.0, 14853.0], [94.1, 14853.0], [94.2, 14853.0], [94.3, 14853.0], [94.4, 14853.0], [94.5, 14853.0], [94.6, 14853.0], [94.7, 14853.0], [94.8, 14853.0], [94.9, 14854.0], [95.0, 14854.0], [95.1, 14854.0], [95.2, 14854.0], [95.3, 14854.0], [95.4, 14854.0], [95.5, 14854.0], [95.6, 15398.0], [95.7, 15398.0], [95.8, 15398.0], [95.9, 15398.0], [96.0, 15398.0], [96.1, 15398.0], [96.2, 15471.0], [96.3, 15471.0], [96.4, 15471.0], [96.5, 15471.0], [96.6, 15471.0], [96.7, 15471.0], [96.8, 15970.0], [96.9, 15970.0], [97.0, 15970.0], [97.1, 15970.0], [97.2, 15970.0], [97.3, 15970.0], [97.4, 15970.0], [97.5, 15970.0], [97.6, 15970.0], [97.7, 15970.0], [97.8, 15970.0], [97.9, 15970.0], [98.0, 15970.0], [98.1, 15971.0], [98.2, 15971.0], [98.3, 15971.0], [98.4, 15971.0], [98.5, 15971.0], [98.6, 15971.0], [98.7, 15971.0], [98.8, 15971.0], [98.9, 15971.0], [99.0, 15971.0], [99.1, 15971.0], [99.2, 15971.0], [99.3, 15971.0], [99.4, 120010.0], [99.5, 120010.0], [99.6, 120010.0], [99.7, 120010.0], [99.8, 120010.0], [99.9, 120010.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4500.0, "maxY": 24.0, "series": [{"data": [[8500.0, 3.0], [9400.0, 1.0], [9500.0, 5.0], [9600.0, 3.0], [9300.0, 5.0], [9800.0, 1.0], [10400.0, 5.0], [11000.0, 3.0], [11600.0, 2.0], [11500.0, 3.0], [11400.0, 1.0], [11800.0, 2.0], [12100.0, 1.0], [12700.0, 6.0], [12500.0, 6.0], [12600.0, 9.0], [12400.0, 5.0], [12800.0, 15.0], [12900.0, 15.0], [13200.0, 5.0], [13100.0, 5.0], [13000.0, 24.0], [13700.0, 2.0], [14600.0, 8.0], [14700.0, 3.0], [14800.0, 4.0], [15300.0, 1.0], [15400.0, 1.0], [15900.0, 4.0], [4500.0, 1.0], [5300.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6700.0, 1.0], [7500.0, 2.0], [120000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 155.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 155.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5891309E12, "maxY": 15.085714285714285, "series": [{"data": [[1.58913102E12, 15.085714285714285], [1.58913114E12, 1.0], [1.58913096E12, 4.071428571428571], [1.58913108E12, 14.871428571428568], [1.5891309E12, 1.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913114E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9521.25, "minX": 1.0, "maxY": 46323.333333333336, "series": [{"data": [[1.0, 46323.333333333336], [2.0, 9521.25], [4.0, 10927.875], [8.0, 11231.90909090909], [16.0, 12603.655737704912], [11.0, 12514.8], [6.0, 12492.666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.82051282051282, 12985.429487179494]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.5891309E12, "maxY": 73687.28333333334, "series": [{"data": [[1.58913102E12, 364.0], [1.58913114E12, 34.28333333333333], [1.58913096E12, 72.8], [1.58913108E12, 364.0], [1.5891309E12, 5.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58913102E12, 73687.28333333334], [1.58913114E12, 0.0], [1.58913096E12, 14738.066666666668], [1.58913108E12, 73686.88333333333], [1.5891309E12, 1052.4833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913114E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9452.0, "minX": 1.5891309E12, "maxY": 120010.0, "series": [{"data": [[1.58913102E12, 12378.442857142856], [1.58913114E12, 120010.0], [1.58913096E12, 10007.214285714286], [1.58913108E12, 12709.614285714286], [1.5891309E12, 9452.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913114E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.5891309E12, "maxY": 12709.585714285717, "series": [{"data": [[1.58913102E12, 12378.385714285712], [1.58913114E12, 0.0], [1.58913096E12, 10007.142857142859], [1.58913108E12, 12709.585714285717], [1.5891309E12, 9450.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913114E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5891309E12, "maxY": 35.0, "series": [{"data": [[1.58913102E12, 2.1571428571428566], [1.58913114E12, 1.0], [1.58913096E12, 1.714285714285714], [1.58913108E12, 2.0714285714285716], [1.5891309E12, 35.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913114E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4507.0, "minX": 1.5891309E12, "maxY": 15971.0, "series": [{"data": [[1.58913102E12, 15971.0], [1.58913096E12, 11884.0], [1.58913108E12, 14630.0], [1.5891309E12, 9452.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58913102E12, 4507.0], [1.58913096E12, 6685.0], [1.58913108E12, 7568.0], [1.5891309E12, 9452.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58913102E12, 14853.9], [1.58913096E12, 11884.0], [1.58913108E12, 14470.499999999998], [1.5891309E12, 9452.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58913102E12, 15971.0], [1.58913096E12, 11884.0], [1.58913108E12, 14630.0], [1.5891309E12, 9452.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58913102E12, 15970.0], [1.58913096E12, 11884.0], [1.58913108E12, 14629.0], [1.5891309E12, 9452.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913108E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9523.0, "minX": 1.0, "maxY": 120010.0, "series": [{"data": [[1.0, 9523.0], [2.0, 10650.0], [8.0, 12833.5], [5.0, 12915.0], [3.0, 11321.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120010.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 12915.0, "series": [{"data": [[1.0, 9523.0], [2.0, 10650.0], [8.0, 12833.5], [5.0, 12915.0], [3.0, 11321.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.5891309E12, "maxY": 1.3, "series": [{"data": [[1.58913102E12, 1.3], [1.58913096E12, 0.35], [1.58913108E12, 0.9166666666666666], [1.5891309E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5891309E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.58913102E12, 1.1666666666666667], [1.58913096E12, 0.23333333333333334], [1.58913108E12, 1.1666666666666667], [1.5891309E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58913114E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58913114E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5891309E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.58913102E12, 1.1666666666666667], [1.58913096E12, 0.23333333333333334], [1.58913108E12, 1.1666666666666667], [1.5891309E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.58913114E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913114E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.5891309E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.58913102E12, 1.1666666666666667], [1.58913096E12, 0.23333333333333334], [1.58913108E12, 1.1666666666666667], [1.5891309E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58913114E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58913114E12, "title": "Total Transactions Per Second"}},
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

