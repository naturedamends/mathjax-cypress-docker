FROM cypress/base:16.18.1

ENV NPM_CONFIG_LOGLEVEL    warn
ENV NPM_CONFIG_UNSAFE_PERM true
ENV TERM                   xterm
ENV CHROME_VERSION         106.0.5249.61-1
ENV DISPLAY_CONFIGURATION=1000x600x24

RUN apt-get update

# Install Chrome (Version 106)
# See all available versions for download on: https://www.ubuntuupdates.org/package_logs?type=ppas&vals=8
RUN apt-get install -y xvfb xdg-utils libgtk-3-0 lsb-release libappindicator3-1 fonts-liberation libasound2 libnspr4 libnss3 libgbm1 \
  && curl https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb -O \
  && dpkg -i google-chrome-stable_${CHROME_VERSION}_amd64.deb \
  && rm google-chrome-stable_${CHROME_VERSION}_amd64.deb \
  && google-chrome --version


WORKDIR /e2e

# Install dev packages
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . /e2e
