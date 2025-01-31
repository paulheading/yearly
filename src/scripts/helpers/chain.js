let chain = {
  data: 0,
  add: function (value) {
    this.data += value;
    return this;
  },
  multiply: function (value) {
    this.data *= value;
    return this;
  },
};

chain.add(4).multiply(2);
