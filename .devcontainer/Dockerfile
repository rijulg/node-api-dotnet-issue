FROM ubuntu:22.04

RUN apt-get update && apt-get install -y wget curl gnupg git ca-certificates build-essential zlib1g-dev libicu-dev

# Install Node
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs && \
    npm i -g yarn

# Install Dotnet
RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh && chmod +x ./dotnet-install.sh && \
    ./dotnet-install.sh --channel 7.0 --verbose && \
    ./dotnet-install.sh --channel 6.0 --verbose
RUN ln -s ~/.dotnet/dotnet /bin/dotnet

# Install and build node-api-dotnet
WORKDIR /var/opt
RUN git clone https://github.com/microsoft/node-api-dotnet.git && \
    cd node-api-dotnet && \
    git checkout 6cf786d7b38e89d6d1563f7a17351a1141adddd3 && \
    dotnet build && \
    dotnet pack && \
    cp -R out/pkg /var/lib/node-api-dotnet
ENV DOTNET_ROOT=/root/.dotnet

# Install Mono to build DLLs
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF && \
    mkdir -p /etc/apt-get/sources.list.d && \
    echo "deb https://download.mono-project.com/repo/ubuntu stable-focal main" | tee /etc/apt-get/sources.list.d/mono-official-stable.list && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y mono-devel

RUN lib_path=/usr/lib/$(uname -m)-linux-gnu && \
    ln -s $lib_path/libdl.so.2 $lib_path/libdl.so