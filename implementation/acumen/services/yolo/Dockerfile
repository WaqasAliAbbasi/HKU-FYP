FROM nvidia/cuda:10.2-devel-ubuntu18.04

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    ca-certificates=* \
    curl=7.58.* \
    gcc=4:7.4.* \
    g++=4:7.4.* \
    build-essential=12.* \
    git=1:2.17* \
    python3.6 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

RUN git clone --depth 1 https://github.com/pjreddie/darknet.git

RUN mkdir /output

WORKDIR /darknet 

RUN sed -i 's/GPU=0/GPU=1/g' ./Makefile

RUN make

RUN curl -sSLO https://pjreddie.com/media/files/yolov3.weights

COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .
CMD [ "python3", "./" ]