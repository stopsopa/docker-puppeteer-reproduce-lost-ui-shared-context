[![Build Status](https://travis-ci.org/stopsopa/docker-puppeteer-reproduce-lost-ui-shared-context.svg?branch=master)](https://travis-ci.org/stopsopa/docker-puppeteer-reproduce-lost-ui-shared-context)

Repository that reproduce puppeteer/chrome error mentioned in those threads: 

- [github repo issue 1464](https://github.com/GoogleChrome/puppeteer/issues/1464#issuecomment-349568640) 
- [github repo issue 1828](https://github.com/GoogleChrome/puppeteer/issues/1828)


    ...
    [0604/131014.605643:ERROR:gpu_process_transport_factory.cc(1016)] Lost UI shared context.
    ...


I noticed also that the same code used on Mac (as usually people are trying to reproduce it on Mac) is working fine but when the same image is build on Linux it crash.

*Follow [travis](https://travis-ci.org/stopsopa/docker-puppeteer-reproduce-lost-ui-shared-context.svg?branch=master) please ...* 