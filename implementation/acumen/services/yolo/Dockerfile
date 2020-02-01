FROM python:3.6-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends git curl \
    && apt-get purge -y --auto-remove \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/eriklindernoren/PyTorch-YOLOv3

WORKDIR /PyTorch-YOLOv3 

RUN cd weights && curl -sSLO https://pjreddie.com/media/files/yolov3.weights

RUN pip3 install --no-cache-dir -r requirements.txt

COPY requirements.txt ./requirements2.txt
RUN pip3 install --no-cache-dir -r requirements2.txt

COPY . .
CMD [ "python3", "./" ]