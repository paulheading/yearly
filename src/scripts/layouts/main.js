import listenInternetChange from "#scripts/listeners/listenInternetChange";
import usingLiveData from "#using/usingLiveData";
import displayBanner from "#display/displayBanner";

listenInternetChange(() => location.reload());

if (!usingLiveData()) displayBanner.innerHTML("<em>OFFLINE MODE</em>");
