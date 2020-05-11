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
        data: {"result": {"minY": 3676.0, "minX": 0.0, "maxY": 120004.0, "series": [{"data": [[0.0, 3676.0], [0.1, 3676.0], [0.2, 3676.0], [0.3, 3676.0], [0.4, 3676.0], [0.5, 3676.0], [0.6, 3676.0], [0.7, 4955.0], [0.8, 4955.0], [0.9, 4955.0], [1.0, 4955.0], [1.1, 4955.0], [1.2, 4955.0], [1.3, 4955.0], [1.4, 5604.0], [1.5, 5604.0], [1.6, 5604.0], [1.7, 5604.0], [1.8, 5604.0], [1.9, 5604.0], [2.0, 5604.0], [2.1, 5777.0], [2.2, 5777.0], [2.3, 5777.0], [2.4, 5777.0], [2.5, 5777.0], [2.6, 5777.0], [2.7, 5777.0], [2.8, 5788.0], [2.9, 5788.0], [3.0, 5788.0], [3.1, 5788.0], [3.2, 5788.0], [3.3, 5788.0], [3.4, 5789.0], [3.5, 5789.0], [3.6, 5789.0], [3.7, 5789.0], [3.8, 5789.0], [3.9, 5789.0], [4.0, 5789.0], [4.1, 6523.0], [4.2, 6523.0], [4.3, 6523.0], [4.4, 6523.0], [4.5, 6523.0], [4.6, 6523.0], [4.7, 6523.0], [4.8, 7338.0], [4.9, 7338.0], [5.0, 7338.0], [5.1, 7338.0], [5.2, 7338.0], [5.3, 7338.0], [5.4, 7338.0], [5.5, 7348.0], [5.6, 7348.0], [5.7, 7348.0], [5.8, 7348.0], [5.9, 7348.0], [6.0, 7348.0], [6.1, 7348.0], [6.2, 7348.0], [6.3, 7348.0], [6.4, 7348.0], [6.5, 7348.0], [6.6, 7348.0], [6.7, 7348.0], [6.8, 7348.0], [6.9, 7348.0], [7.0, 7348.0], [7.1, 7348.0], [7.2, 7348.0], [7.3, 7348.0], [7.4, 7348.0], [7.5, 7373.0], [7.6, 7373.0], [7.7, 7373.0], [7.8, 7373.0], [7.9, 7373.0], [8.0, 7373.0], [8.1, 7373.0], [8.2, 7425.0], [8.3, 7425.0], [8.4, 7425.0], [8.5, 7425.0], [8.6, 7425.0], [8.7, 7425.0], [8.8, 7472.0], [8.9, 7472.0], [9.0, 7472.0], [9.1, 7472.0], [9.2, 7472.0], [9.3, 7472.0], [9.4, 7472.0], [9.5, 7506.0], [9.6, 7506.0], [9.7, 7506.0], [9.8, 7506.0], [9.9, 7506.0], [10.0, 7506.0], [10.1, 7506.0], [10.2, 7514.0], [10.3, 7514.0], [10.4, 7514.0], [10.5, 7514.0], [10.6, 7514.0], [10.7, 7514.0], [10.8, 7514.0], [10.9, 7550.0], [11.0, 7550.0], [11.1, 7550.0], [11.2, 7550.0], [11.3, 7550.0], [11.4, 7550.0], [11.5, 7558.0], [11.6, 7558.0], [11.7, 7558.0], [11.8, 7558.0], [11.9, 7558.0], [12.0, 7558.0], [12.1, 7558.0], [12.2, 7579.0], [12.3, 7579.0], [12.4, 7579.0], [12.5, 7579.0], [12.6, 7579.0], [12.7, 7579.0], [12.8, 7579.0], [12.9, 7770.0], [13.0, 7770.0], [13.1, 7770.0], [13.2, 7770.0], [13.3, 7770.0], [13.4, 7770.0], [13.5, 7770.0], [13.6, 7770.0], [13.7, 7770.0], [13.8, 7770.0], [13.9, 7770.0], [14.0, 7770.0], [14.1, 7770.0], [14.2, 7771.0], [14.3, 7771.0], [14.4, 7771.0], [14.5, 7771.0], [14.6, 7771.0], [14.7, 7771.0], [14.8, 7771.0], [14.9, 8044.0], [15.0, 8044.0], [15.1, 8044.0], [15.2, 8044.0], [15.3, 8044.0], [15.4, 8044.0], [15.5, 8044.0], [15.6, 8045.0], [15.7, 8045.0], [15.8, 8045.0], [15.9, 8045.0], [16.0, 8045.0], [16.1, 8045.0], [16.2, 8045.0], [16.3, 8722.0], [16.4, 8722.0], [16.5, 8722.0], [16.6, 8722.0], [16.7, 8722.0], [16.8, 8722.0], [16.9, 9317.0], [17.0, 9317.0], [17.1, 9317.0], [17.2, 9317.0], [17.3, 9317.0], [17.4, 9317.0], [17.5, 9317.0], [17.6, 9317.0], [17.7, 9317.0], [17.8, 9317.0], [17.9, 9317.0], [18.0, 9317.0], [18.1, 9317.0], [18.2, 9317.0], [18.3, 9467.0], [18.4, 9467.0], [18.5, 9467.0], [18.6, 9467.0], [18.7, 9467.0], [18.8, 9467.0], [18.9, 9467.0], [19.0, 9513.0], [19.1, 9513.0], [19.2, 9513.0], [19.3, 9513.0], [19.4, 9513.0], [19.5, 9513.0], [19.6, 10444.0], [19.7, 10444.0], [19.8, 10444.0], [19.9, 10444.0], [20.0, 10444.0], [20.1, 10444.0], [20.2, 10444.0], [20.3, 11144.0], [20.4, 11144.0], [20.5, 11144.0], [20.6, 11144.0], [20.7, 11144.0], [20.8, 11144.0], [20.9, 11144.0], [21.0, 11145.0], [21.1, 11145.0], [21.2, 11145.0], [21.3, 11145.0], [21.4, 11145.0], [21.5, 11145.0], [21.6, 11145.0], [21.7, 11243.0], [21.8, 11243.0], [21.9, 11243.0], [22.0, 11243.0], [22.1, 11243.0], [22.2, 11243.0], [22.3, 11290.0], [22.4, 11290.0], [22.5, 11290.0], [22.6, 11290.0], [22.7, 11290.0], [22.8, 11290.0], [22.9, 11290.0], [23.0, 11291.0], [23.1, 11291.0], [23.2, 11291.0], [23.3, 11291.0], [23.4, 11291.0], [23.5, 11291.0], [23.6, 11291.0], [23.7, 11293.0], [23.8, 11293.0], [23.9, 11293.0], [24.0, 11293.0], [24.1, 11293.0], [24.2, 11293.0], [24.3, 11293.0], [24.4, 12372.0], [24.5, 12372.0], [24.6, 12372.0], [24.7, 12372.0], [24.8, 12372.0], [24.9, 12372.0], [25.0, 12372.0], [25.1, 12589.0], [25.2, 12589.0], [25.3, 12589.0], [25.4, 12589.0], [25.5, 12589.0], [25.6, 12589.0], [25.7, 12589.0], [25.8, 12589.0], [25.9, 12589.0], [26.0, 12589.0], [26.1, 12589.0], [26.2, 12589.0], [26.3, 12589.0], [26.4, 13048.0], [26.5, 13048.0], [26.6, 13048.0], [26.7, 13048.0], [26.8, 13048.0], [26.9, 13048.0], [27.0, 13048.0], [27.1, 13048.0], [27.2, 13048.0], [27.3, 13048.0], [27.4, 13048.0], [27.5, 13048.0], [27.6, 13048.0], [27.7, 13048.0], [27.8, 13049.0], [27.9, 13049.0], [28.0, 13049.0], [28.1, 13049.0], [28.2, 13049.0], [28.3, 13049.0], [28.4, 14185.0], [28.5, 14185.0], [28.6, 14185.0], [28.7, 14185.0], [28.8, 14185.0], [28.9, 14185.0], [29.0, 14185.0], [29.1, 14186.0], [29.2, 14186.0], [29.3, 14186.0], [29.4, 14186.0], [29.5, 14186.0], [29.6, 14186.0], [29.7, 14186.0], [29.8, 14436.0], [29.9, 14436.0], [30.0, 14436.0], [30.1, 14436.0], [30.2, 14436.0], [30.3, 14436.0], [30.4, 14436.0], [30.5, 15812.0], [30.6, 15812.0], [30.7, 15812.0], [30.8, 15812.0], [30.9, 15812.0], [31.0, 15812.0], [31.1, 15813.0], [31.2, 15813.0], [31.3, 15813.0], [31.4, 15813.0], [31.5, 15813.0], [31.6, 15813.0], [31.7, 15813.0], [31.8, 15815.0], [31.9, 15815.0], [32.0, 15815.0], [32.1, 15815.0], [32.2, 15815.0], [32.3, 15815.0], [32.4, 15815.0], [32.5, 16036.0], [32.6, 16036.0], [32.7, 16036.0], [32.8, 16036.0], [32.9, 16036.0], [33.0, 16036.0], [33.1, 16036.0], [33.2, 16036.0], [33.3, 16036.0], [33.4, 16036.0], [33.5, 16036.0], [33.6, 16036.0], [33.7, 16036.0], [33.8, 16036.0], [33.9, 16036.0], [34.0, 16036.0], [34.1, 16036.0], [34.2, 16036.0], [34.3, 16036.0], [34.4, 16036.0], [34.5, 16386.0], [34.6, 16386.0], [34.7, 16386.0], [34.8, 16386.0], [34.9, 16386.0], [35.0, 16386.0], [35.1, 16386.0], [35.2, 16386.0], [35.3, 16386.0], [35.4, 16386.0], [35.5, 16386.0], [35.6, 16386.0], [35.7, 16386.0], [35.8, 16386.0], [35.9, 16387.0], [36.0, 16387.0], [36.1, 16387.0], [36.2, 16387.0], [36.3, 16387.0], [36.4, 16387.0], [36.5, 16692.0], [36.6, 16692.0], [36.7, 16692.0], [36.8, 16692.0], [36.9, 16692.0], [37.0, 16692.0], [37.1, 16692.0], [37.2, 16694.0], [37.3, 16694.0], [37.4, 16694.0], [37.5, 16694.0], [37.6, 16694.0], [37.7, 16694.0], [37.8, 16694.0], [37.9, 16694.0], [38.0, 16694.0], [38.1, 16694.0], [38.2, 16694.0], [38.3, 16694.0], [38.4, 16694.0], [38.5, 16694.0], [38.6, 16805.0], [38.7, 16805.0], [38.8, 16805.0], [38.9, 16805.0], [39.0, 16805.0], [39.1, 16805.0], [39.2, 16806.0], [39.3, 16806.0], [39.4, 16806.0], [39.5, 16806.0], [39.6, 16806.0], [39.7, 16806.0], [39.8, 16806.0], [39.9, 16809.0], [40.0, 16809.0], [40.1, 16809.0], [40.2, 16809.0], [40.3, 16809.0], [40.4, 16809.0], [40.5, 16809.0], [40.6, 17360.0], [40.7, 17360.0], [40.8, 17360.0], [40.9, 17360.0], [41.0, 17360.0], [41.1, 17360.0], [41.2, 17360.0], [41.3, 17509.0], [41.4, 17509.0], [41.5, 17509.0], [41.6, 17509.0], [41.7, 17509.0], [41.8, 17509.0], [41.9, 19466.0], [42.0, 19466.0], [42.1, 19466.0], [42.2, 19466.0], [42.3, 19466.0], [42.4, 19466.0], [42.5, 19466.0], [42.6, 19466.0], [42.7, 19466.0], [42.8, 19466.0], [42.9, 19466.0], [43.0, 19466.0], [43.1, 19466.0], [43.2, 19466.0], [43.3, 19468.0], [43.4, 19468.0], [43.5, 19468.0], [43.6, 19468.0], [43.7, 19468.0], [43.8, 19468.0], [43.9, 19468.0], [44.0, 19490.0], [44.1, 19490.0], [44.2, 19490.0], [44.3, 19490.0], [44.4, 19490.0], [44.5, 19490.0], [44.6, 22435.0], [44.7, 22435.0], [44.8, 22435.0], [44.9, 22435.0], [45.0, 22435.0], [45.1, 22435.0], [45.2, 22435.0], [45.3, 22439.0], [45.4, 22439.0], [45.5, 22439.0], [45.6, 22439.0], [45.7, 22439.0], [45.8, 22439.0], [45.9, 22439.0], [46.0, 22440.0], [46.1, 22440.0], [46.2, 22440.0], [46.3, 22440.0], [46.4, 22440.0], [46.5, 22440.0], [46.6, 22440.0], [46.7, 26011.0], [46.8, 26011.0], [46.9, 26011.0], [47.0, 26011.0], [47.1, 26011.0], [47.2, 26011.0], [47.3, 26014.0], [47.4, 26014.0], [47.5, 26014.0], [47.6, 26014.0], [47.7, 26014.0], [47.8, 26014.0], [47.9, 26014.0], [48.0, 26015.0], [48.1, 26015.0], [48.2, 26015.0], [48.3, 26015.0], [48.4, 26015.0], [48.5, 26015.0], [48.6, 26015.0], [48.7, 28888.0], [48.8, 28888.0], [48.9, 28888.0], [49.0, 28888.0], [49.1, 28888.0], [49.2, 28888.0], [49.3, 28888.0], [49.4, 28889.0], [49.5, 28889.0], [49.6, 28889.0], [49.7, 28889.0], [49.8, 28889.0], [49.9, 28889.0], [50.0, 28889.0], [50.1, 28891.0], [50.2, 28891.0], [50.3, 28891.0], [50.4, 28891.0], [50.5, 28891.0], [50.6, 28891.0], [50.7, 32703.0], [50.8, 32703.0], [50.9, 32703.0], [51.0, 32703.0], [51.1, 32703.0], [51.2, 32703.0], [51.3, 32703.0], [51.4, 32704.0], [51.5, 32704.0], [51.6, 32704.0], [51.7, 32704.0], [51.8, 32704.0], [51.9, 32704.0], [52.0, 32704.0], [52.1, 32705.0], [52.2, 32705.0], [52.3, 32705.0], [52.4, 32705.0], [52.5, 32705.0], [52.6, 32705.0], [52.7, 32705.0], [52.8, 33026.0], [52.9, 33026.0], [53.0, 33026.0], [53.1, 33026.0], [53.2, 33026.0], [53.3, 33026.0], [53.4, 33026.0], [53.5, 33026.0], [53.6, 33026.0], [53.7, 33026.0], [53.8, 33026.0], [53.9, 33026.0], [54.0, 33026.0], [54.1, 33112.0], [54.2, 33112.0], [54.3, 33112.0], [54.4, 33112.0], [54.5, 33112.0], [54.6, 33112.0], [54.7, 33112.0], [54.8, 33112.0], [54.9, 33112.0], [55.0, 33112.0], [55.1, 33112.0], [55.2, 33112.0], [55.3, 33112.0], [55.4, 33112.0], [55.5, 33218.0], [55.6, 33218.0], [55.7, 33218.0], [55.8, 33218.0], [55.9, 33218.0], [56.0, 33218.0], [56.1, 33218.0], [56.2, 33218.0], [56.3, 33218.0], [56.4, 33218.0], [56.5, 33218.0], [56.6, 33218.0], [56.7, 33218.0], [56.8, 33383.0], [56.9, 33383.0], [57.0, 33383.0], [57.1, 33383.0], [57.2, 33383.0], [57.3, 33383.0], [57.4, 33383.0], [57.5, 33383.0], [57.6, 33383.0], [57.7, 33383.0], [57.8, 33383.0], [57.9, 33383.0], [58.0, 33383.0], [58.1, 33383.0], [58.2, 33700.0], [58.3, 33700.0], [58.4, 33700.0], [58.5, 33700.0], [58.6, 33700.0], [58.7, 33700.0], [58.8, 33700.0], [58.9, 33700.0], [59.0, 33700.0], [59.1, 33700.0], [59.2, 33700.0], [59.3, 33700.0], [59.4, 33700.0], [59.5, 34083.0], [59.6, 34083.0], [59.7, 34083.0], [59.8, 34083.0], [59.9, 34083.0], [60.0, 34083.0], [60.1, 34083.0], [60.2, 34083.0], [60.3, 34083.0], [60.4, 34083.0], [60.5, 34083.0], [60.6, 34083.0], [60.7, 34083.0], [60.8, 34083.0], [60.9, 35198.0], [61.0, 35198.0], [61.1, 35198.0], [61.2, 35198.0], [61.3, 35198.0], [61.4, 35198.0], [61.5, 35201.0], [61.6, 35201.0], [61.7, 35201.0], [61.8, 35201.0], [61.9, 35201.0], [62.0, 35201.0], [62.1, 35201.0], [62.2, 35510.0], [62.3, 35510.0], [62.4, 35510.0], [62.5, 35510.0], [62.6, 35510.0], [62.7, 35510.0], [62.8, 35510.0], [62.9, 35734.0], [63.0, 35734.0], [63.1, 35734.0], [63.2, 35734.0], [63.3, 35734.0], [63.4, 35734.0], [63.5, 35734.0], [63.6, 36142.0], [63.7, 36142.0], [63.8, 36142.0], [63.9, 36142.0], [64.0, 36142.0], [64.1, 36142.0], [64.2, 36285.0], [64.3, 36285.0], [64.4, 36285.0], [64.5, 36285.0], [64.6, 36285.0], [64.7, 36285.0], [64.8, 36285.0], [64.9, 37119.0], [65.0, 37119.0], [65.1, 37119.0], [65.2, 37119.0], [65.3, 37119.0], [65.4, 37119.0], [65.5, 37119.0], [65.6, 37281.0], [65.7, 37281.0], [65.8, 37281.0], [65.9, 37281.0], [66.0, 37281.0], [66.1, 37281.0], [66.2, 37281.0], [66.3, 37620.0], [66.4, 37620.0], [66.5, 37620.0], [66.6, 37620.0], [66.7, 37620.0], [66.8, 37620.0], [66.9, 39911.0], [67.0, 39911.0], [67.1, 39911.0], [67.2, 39911.0], [67.3, 39911.0], [67.4, 39911.0], [67.5, 39911.0], [67.6, 39914.0], [67.7, 39914.0], [67.8, 39914.0], [67.9, 39914.0], [68.0, 39914.0], [68.1, 39914.0], [68.2, 39914.0], [68.3, 39915.0], [68.4, 39915.0], [68.5, 39915.0], [68.6, 39915.0], [68.7, 39915.0], [68.8, 39915.0], [68.9, 39915.0], [69.0, 41899.0], [69.1, 41899.0], [69.2, 41899.0], [69.3, 41899.0], [69.4, 41899.0], [69.5, 41899.0], [69.6, 41902.0], [69.7, 41902.0], [69.8, 41902.0], [69.9, 41902.0], [70.0, 41902.0], [70.1, 41902.0], [70.2, 41902.0], [70.3, 41903.0], [70.4, 41903.0], [70.5, 41903.0], [70.6, 41903.0], [70.7, 41903.0], [70.8, 41903.0], [70.9, 41903.0], [71.0, 46909.0], [71.1, 46909.0], [71.2, 46909.0], [71.3, 46909.0], [71.4, 46909.0], [71.5, 46909.0], [71.6, 46909.0], [71.7, 46910.0], [71.8, 46910.0], [71.9, 46910.0], [72.0, 46910.0], [72.1, 46910.0], [72.2, 46910.0], [72.3, 46912.0], [72.4, 46912.0], [72.5, 46912.0], [72.6, 46912.0], [72.7, 46912.0], [72.8, 46912.0], [72.9, 46912.0], [73.0, 49397.0], [73.1, 49397.0], [73.2, 49397.0], [73.3, 49397.0], [73.4, 49397.0], [73.5, 49397.0], [73.6, 49397.0], [73.7, 49398.0], [73.8, 49398.0], [73.9, 49398.0], [74.0, 49398.0], [74.1, 49398.0], [74.2, 49398.0], [74.3, 49398.0], [74.4, 49401.0], [74.5, 49401.0], [74.6, 49401.0], [74.7, 49401.0], [74.8, 49401.0], [74.9, 49401.0], [75.0, 49401.0], [75.1, 53422.0], [75.2, 53422.0], [75.3, 53422.0], [75.4, 53422.0], [75.5, 53422.0], [75.6, 53422.0], [75.7, 53423.0], [75.8, 53423.0], [75.9, 53423.0], [76.0, 53423.0], [76.1, 53423.0], [76.2, 53423.0], [76.3, 53423.0], [76.4, 53424.0], [76.5, 53424.0], [76.6, 53424.0], [76.7, 53424.0], [76.8, 53424.0], [76.9, 53424.0], [77.0, 53424.0], [77.1, 55722.0], [77.2, 55722.0], [77.3, 55722.0], [77.4, 55722.0], [77.5, 55722.0], [77.6, 55722.0], [77.7, 55722.0], [77.8, 55724.0], [77.9, 55724.0], [78.0, 55724.0], [78.1, 55724.0], [78.2, 55724.0], [78.3, 55724.0], [78.4, 55725.0], [78.5, 55725.0], [78.6, 55725.0], [78.7, 55725.0], [78.8, 55725.0], [78.9, 55725.0], [79.0, 55725.0], [79.1, 60079.0], [79.2, 60079.0], [79.3, 60079.0], [79.4, 60079.0], [79.5, 60079.0], [79.6, 60079.0], [79.7, 60079.0], [79.8, 60080.0], [79.9, 60080.0], [80.0, 60080.0], [80.1, 60080.0], [80.2, 60080.0], [80.3, 60080.0], [80.4, 60080.0], [80.5, 60081.0], [80.6, 60081.0], [80.7, 60081.0], [80.8, 60081.0], [80.9, 60081.0], [81.0, 60081.0], [81.1, 62328.0], [81.2, 62328.0], [81.3, 62328.0], [81.4, 62328.0], [81.5, 62328.0], [81.6, 62328.0], [81.7, 62328.0], [81.8, 62330.0], [81.9, 62330.0], [82.0, 62330.0], [82.1, 62330.0], [82.2, 62330.0], [82.3, 62330.0], [82.4, 62330.0], [82.5, 62339.0], [82.6, 62339.0], [82.7, 62339.0], [82.8, 62339.0], [82.9, 62339.0], [83.0, 62339.0], [83.1, 62339.0], [83.2, 66716.0], [83.3, 66716.0], [83.4, 66716.0], [83.5, 66716.0], [83.6, 66716.0], [83.7, 66716.0], [83.8, 66724.0], [83.9, 66724.0], [84.0, 66724.0], [84.1, 66724.0], [84.2, 66724.0], [84.3, 66724.0], [84.4, 66724.0], [84.5, 66727.0], [84.6, 66727.0], [84.7, 66727.0], [84.8, 66727.0], [84.9, 66727.0], [85.0, 66727.0], [85.1, 66727.0], [85.2, 68910.0], [85.3, 68910.0], [85.4, 68910.0], [85.5, 68910.0], [85.6, 68910.0], [85.7, 68910.0], [85.8, 68910.0], [85.9, 68911.0], [86.0, 68911.0], [86.1, 68911.0], [86.2, 68911.0], [86.3, 68911.0], [86.4, 68911.0], [86.5, 68911.0], [86.6, 68911.0], [86.7, 68911.0], [86.8, 68911.0], [86.9, 68911.0], [87.0, 68911.0], [87.1, 68911.0], [87.2, 69060.0], [87.3, 69060.0], [87.4, 69060.0], [87.5, 69060.0], [87.6, 69060.0], [87.7, 69060.0], [87.8, 69060.0], [87.9, 69062.0], [88.0, 69062.0], [88.1, 69062.0], [88.2, 69062.0], [88.3, 69062.0], [88.4, 69062.0], [88.5, 69062.0], [88.6, 69076.0], [88.7, 69076.0], [88.8, 69076.0], [88.9, 69076.0], [89.0, 69076.0], [89.1, 69076.0], [89.2, 69477.0], [89.3, 69477.0], [89.4, 69477.0], [89.5, 69477.0], [89.6, 69477.0], [89.7, 69477.0], [89.8, 69477.0], [89.9, 69486.0], [90.0, 69486.0], [90.1, 69486.0], [90.2, 69486.0], [90.3, 69486.0], [90.4, 69486.0], [90.5, 69486.0], [90.6, 69486.0], [90.7, 69486.0], [90.8, 69486.0], [90.9, 69486.0], [91.0, 69486.0], [91.1, 69486.0], [91.2, 69486.0], [91.3, 69636.0], [91.4, 69636.0], [91.5, 69636.0], [91.6, 69636.0], [91.7, 69636.0], [91.8, 69636.0], [91.9, 69636.0], [92.0, 69636.0], [92.1, 69636.0], [92.2, 69636.0], [92.3, 69636.0], [92.4, 69636.0], [92.5, 69636.0], [92.6, 69636.0], [92.7, 69636.0], [92.8, 69636.0], [92.9, 69636.0], [93.0, 69636.0], [93.1, 69636.0], [93.2, 69636.0], [93.3, 71036.0], [93.4, 71036.0], [93.5, 71036.0], [93.6, 71036.0], [93.7, 71036.0], [93.8, 71036.0], [93.9, 71036.0], [94.0, 71037.0], [94.1, 71037.0], [94.2, 71037.0], [94.3, 71037.0], [94.4, 71037.0], [94.5, 71037.0], [94.6, 71037.0], [94.7, 71037.0], [94.8, 71037.0], [94.9, 71037.0], [95.0, 71037.0], [95.1, 71037.0], [95.2, 71037.0], [95.3, 71063.0], [95.4, 71063.0], [95.5, 71063.0], [95.6, 71063.0], [95.7, 71063.0], [95.8, 71063.0], [95.9, 71063.0], [96.0, 71064.0], [96.1, 71064.0], [96.2, 71064.0], [96.3, 71064.0], [96.4, 71064.0], [96.5, 71064.0], [96.6, 71064.0], [96.7, 71064.0], [96.8, 71064.0], [96.9, 71064.0], [97.0, 71064.0], [97.1, 71064.0], [97.2, 71064.0], [97.3, 71065.0], [97.4, 71065.0], [97.5, 71065.0], [97.6, 71065.0], [97.7, 71065.0], [97.8, 71065.0], [97.9, 71065.0], [98.0, 71066.0], [98.1, 71066.0], [98.2, 71066.0], [98.3, 71066.0], [98.4, 71066.0], [98.5, 71066.0], [98.6, 71066.0], [98.7, 71066.0], [98.8, 71066.0], [98.9, 71066.0], [99.0, 71066.0], [99.1, 71066.0], [99.2, 71066.0], [99.3, 71066.0], [99.4, 120004.0], [99.5, 120004.0], [99.6, 120004.0], [99.7, 120004.0], [99.8, 120004.0], [99.9, 120004.0], [100.0, 120004.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3600.0, "maxY": 9.0, "series": [{"data": [[3600.0, 1.0], [66700.0, 3.0], [68900.0, 3.0], [4900.0, 1.0], [5600.0, 1.0], [5700.0, 3.0], [6500.0, 1.0], [7300.0, 5.0], [7400.0, 2.0], [7500.0, 5.0], [7700.0, 3.0], [8000.0, 2.0], [8700.0, 1.0], [9300.0, 2.0], [9500.0, 1.0], [9400.0, 1.0], [10400.0, 1.0], [11200.0, 4.0], [11100.0, 2.0], [12500.0, 2.0], [12300.0, 1.0], [13000.0, 3.0], [14100.0, 2.0], [14400.0, 1.0], [15800.0, 3.0], [16000.0, 3.0], [16300.0, 3.0], [17300.0, 1.0], [16600.0, 3.0], [16800.0, 3.0], [17500.0, 1.0], [19400.0, 4.0], [22400.0, 3.0], [26000.0, 3.0], [28800.0, 3.0], [32700.0, 3.0], [33100.0, 2.0], [33300.0, 2.0], [33200.0, 2.0], [34000.0, 2.0], [33000.0, 2.0], [33700.0, 2.0], [35500.0, 1.0], [36100.0, 1.0], [36200.0, 1.0], [35200.0, 1.0], [35700.0, 1.0], [35100.0, 1.0], [37100.0, 1.0], [37600.0, 1.0], [37200.0, 1.0], [39900.0, 3.0], [41800.0, 1.0], [41900.0, 2.0], [46900.0, 3.0], [49300.0, 2.0], [49400.0, 1.0], [53400.0, 3.0], [55700.0, 3.0], [60000.0, 3.0], [62300.0, 3.0], [69000.0, 3.0], [69600.0, 3.0], [69400.0, 3.0], [71000.0, 9.0], [120000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 120000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 147.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 147.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.58917002E12, "maxY": 53.41176470588236, "series": [{"data": [[1.58917002E12, 2.6666666666666665], [1.5891702E12, 21.325], [1.58917008E12, 15.466666666666667], [1.58917014E12, 53.41176470588236]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6742.777777777777, "minX": 1.0, "maxY": 120004.0, "series": [{"data": [[2.0, 7472.6], [32.0, 16772.11111111111], [33.0, 55723.666666666664], [35.0, 53422.5], [37.0, 120004.0], [36.0, 53424.0], [38.0, 49401.0], [40.0, 49397.5], [43.0, 46910.333333333336], [46.0, 41901.333333333336], [49.0, 39913.333333333336], [3.0, 68910.66666666667], [52.0, 35377.666666666664], [55.0, 34893.666666666664], [58.0, 34112.333333333336], [61.0, 35262.0], [4.0, 6742.777777777777], [64.0, 30396.714285714283], [6.0, 71036.66666666667], [8.0, 8412.533333333333], [9.0, 69483.0], [12.0, 71063.66666666667], [15.0, 69636.0], [1.0, 7554.0], [16.0, 13369.588235294117], [18.0, 71065.66666666667], [19.0, 69062.0], [21.0, 69068.0], [24.0, 66722.33333333333], [27.0, 62332.333333333336], [30.0, 60080.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[29.08783783783783, 32741.871621621613]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 62.4, "minX": 1.58917002E12, "maxY": 53688.4, "series": [{"data": [[1.58917002E12, 62.4], [1.5891702E12, 237.08333333333334], [1.58917008E12, 234.0], [1.58917014E12, 265.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58917002E12, 12632.15], [1.5891702E12, 41054.95], [1.58917008E12, 47371.85], [1.58917014E12, 53688.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6880.666666666667, "minX": 1.58917002E12, "maxY": 65845.72499999999, "series": [{"data": [[1.58917002E12, 6880.666666666667], [1.5891702E12, 65845.72499999999], [1.58917008E12, 11732.844444444443], [1.58917014E12, 31400.43137254903]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6880.166666666667, "minX": 1.58917002E12, "maxY": 62845.575, "series": [{"data": [[1.58917002E12, 6880.166666666667], [1.5891702E12, 62845.575], [1.58917008E12, 11732.666666666668], [1.58917014E12, 31400.37254901962]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.0222222222222226, "minX": 1.58917002E12, "maxY": 5.050000000000001, "series": [{"data": [[1.58917002E12, 3.9166666666666665], [1.5891702E12, 5.050000000000001], [1.58917008E12, 3.0222222222222226], [1.58917014E12, 4.745098039215687]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3676.0, "minX": 1.58917002E12, "maxY": 71066.0, "series": [{"data": [[1.58917002E12, 7579.0], [1.5891702E12, 71066.0], [1.58917008E12, 19490.0], [1.58917014E12, 46912.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58917002E12, 3676.0], [1.5891702E12, 49397.0], [1.58917008E12, 4955.0], [1.58917014E12, 16386.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58917002E12, 7572.7], [1.5891702E12, 71064.0], [1.58917008E12, 16694.0], [1.58917014E12, 41901.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58917002E12, 7579.0], [1.5891702E12, 71066.0], [1.58917008E12, 19490.0], [1.58917014E12, 46912.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58917002E12, 7579.0], [1.5891702E12, 71066.0], [1.58917008E12, 17464.3], [1.58917014E12, 46909.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7489.0, "minX": 1.0, "maxY": 120004.0, "series": [{"data": [[1.0, 7489.0], [2.0, 11867.0], [3.0, 33218.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 120004.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 33218.0, "series": [{"data": [[1.0, 7489.0], [2.0, 11867.0], [3.0, 33218.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.58917002E12, "maxY": 1.2166666666666666, "series": [{"data": [[1.58917002E12, 0.26666666666666666], [1.58917008E12, 1.2166666666666666], [1.58917014E12, 0.9833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58917014E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917002E12, "maxY": 0.85, "series": [{"data": [[1.58917002E12, 0.2], [1.5891702E12, 0.65], [1.58917008E12, 0.75], [1.58917014E12, 0.85]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5891702E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5891702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917002E12, "maxY": 0.85, "series": [{"data": [[1.58917002E12, 0.2], [1.5891702E12, 0.65], [1.58917008E12, 0.75], [1.58917014E12, 0.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.5891702E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.58917002E12, "maxY": 0.85, "series": [{"data": [[1.58917002E12, 0.2], [1.5891702E12, 0.65], [1.58917008E12, 0.75], [1.58917014E12, 0.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5891702E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5891702E12, "title": "Total Transactions Per Second"}},
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

