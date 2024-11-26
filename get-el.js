function getElementsByTag(tagName) {
    if (typeof tagName != 'string') {
        throw new Error('tagName must be a string');
    }
    return document.getElementsByTagName(tagName);
}

function getElementsByClassName(className) {
    if (typeof className != 'string') {
        throw new Error('className must be a string');
    }
    return document.getElementsByClassName(className);
}

function getElementById(id) {
    if (typeof id !== 'string') {
      throw new Error('id must be a string');
    }
    const element = document.getElementById(id);
    return element || undefined; // Если элемента нет, возвращает undefined
  }

function getElementsByAttribute(attributeName, attributeValue) {
    if (typeof attributeName != 'string') {
        throw new Error('attributeName must be a string');
    }

    const selector = attributeValue
    ? `[${attributeName}="${attributeValue}"]`
    : `[${attributeName}]`;
    return document.querySelectorAll(selector); 
}