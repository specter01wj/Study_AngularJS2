var demo_05_01;
(function (demo_05_01) {
    // Union Types
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            // return Array(padding + 1).join(" ") + value;
            return (padding + 1) + ' ' + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + typeof padding + "'.");
    }
    var res1 = padLeft("Hello world", 4);
    var res2 = padLeft("Hello world", "Red");
    console.log(res1);
    console.log(res2);
    // let indentedString = padLeft("Hello world", true);
    // console.log(indentedString);
    function padLeft2(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + typeof padding + "'.");
    }
    function logger(state) {
        // state.code;
        switch (state.state) {
            case "loading":
                return "Downloading...";
            case "failed":
                return "Error " + state.code + " downloading";
            case "success":
                // return `Downloaded ${state.response.title} - ${state.response.summary}`;
                return "Downloaded " + state.response.title + " - " + state.response.summary + " - time: " + state.response.duration;
        }
    }
    var net1 = {
        state: "success",
        response: {
            title: 'ED-01',
            duration: 24,
            summary: 'success-101'
        }
    };
    console.log(logger(net1));
    // Union Exhaustiveness checking
    // Intersection Types
})(demo_05_01 || (demo_05_01 = {}));
