from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/user')
def user():
    return "Users page!"

@app.route('/user/<string:username>')
def users(username):
    #return "<h1>Hello %s</h1>"% username
    return render_template('user.html', uname=username)



if __name__ == '__main__':
    app.run(debug=True)
