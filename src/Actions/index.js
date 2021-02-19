export const smallcount = (smallval) => {
    return { type: "small", payload: smallval };
};

export const mediumcount = (mediumval) => {
    return { type: "medium", payload: mediumval };
};

export const largecount = (largeval) => {
    return { type: "large", payload: largeval };
};

export const adultscount = (adultsval) => {
    return { type: "adults", payload: adultsval };
};

export const childrencount = (childrenval) => {
    return { type: "children", payload: childrenval };
};

export const totalcount = (totalval) => {
    return { type: "total", payload: totalval };
};
