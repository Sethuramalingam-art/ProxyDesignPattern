# ProxyDesignPattern

In javascript all are objects. Objects in js passed as reference and there is a high chance that we can mutate the object without unknownly. So what proxy does is, proxy act as a intermediate tree that helps us to moniter the modification of object. So we can 100% sure that the data is updated in the object under the control. 

And JS is not a type language so we are not sure what is being updated to the property value.

ex. if obj property type is string and we are updating the property type as number means it wont throw any error because it is JS. So we should have control of the obj. That is the reason we are going to proxy design pattern.
