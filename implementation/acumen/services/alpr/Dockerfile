FROM ubuntu:16.04

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    software-properties-common \ 
    && rm -rf /var/lib/apt/lists/*

RUN add-apt-repository ppa:deadsnakes/ppa \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    python3.6 \
    openalpr \
    openalpr-daemon \
    openalpr-utils \
    libopenalpr-dev \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN python3.6 -m pip install --no-cache-dir -r requirements.txt

COPY . .

ENTRYPOINT ["/usr/bin/env"]
CMD [ "python3.6", "./" ]