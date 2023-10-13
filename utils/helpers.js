module.exports =  {
    truncate: (str, len) => {
      if (str.length > len && str.length > 0) {
        var new_str = str + " ";
        new_str = str.substr(0, len);
        new_str = str.substr(0, new_str.lastIndexOf(" "));
        return new_str;
      }
      return str;
    }
  }