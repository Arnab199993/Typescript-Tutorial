var usersUtils;
(function (usersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Arnab Dutta";
        };
        return Users;
    }());
    usersUtils.Users = Users;
})(usersUtils || (usersUtils = {}));
var a1 = new usersUtils.Users();
