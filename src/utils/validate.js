//手机号验证
export function validatePhone(rule, value, callback) {
  if (/^1[34578]{1}\d{9}$/.test(value) == false) {
    callback(new Error("请输入正确的手机号"));
  } else {
    callback();
  }
}

// url验证
export function validateUrl(rule, value, callback) {
  if (
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-_~:/?#[\]@!$&',;=.]+$/.test(
      value
    ) == false
  ) {
    callback(new Error("请输入正确的url格式"));
  } else {
    callback();
  }
}
