import events from "./events";

class LocalEventAPI {
    constructor() {
        this.events = events["events"].sort(function(a,b) {
            return new Date(b.date) - new Date(a.date);
        });
        this.index = 0;
        this.newest = true;
    }
    start_over (newest) {
        this.events = events["events"].sort(function(a,b) {
            if (newest) {
                return new Date(b.date) - new Date(a.date);
            } else {
                return new Date(a.date) - new Date(b.date);
            }
        });
        this.index = 0;
    }
    get_events(size=10) {
        const hasMore = this.index < this.events.length;
        let end = 0;

        if (hasMore)
            end = this.index+size
        else
            end =  (this.index+size) % this.events.length;

        const eventObject = {
            "events": this.events.slice(this.index, end),
            "hasMore": hasMore
        };

        this.index = this.index+size;

        return new Promise(function(resolve, regject) {
            resolve(eventObject)
        });
    }
}

export default LocalEventAPI;
