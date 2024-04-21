from flask import Flask, render_template, redirect, url_for
from flask import request

app = Flask(__name__)

@app.route('/submit_survey', methods=['POST'])
def submit_survey():
    gym_access = request.form.get('gymAccess')
    workout_days = request.form.get('workoutDays')
    workout_intensity = request.form.get('workoutIntensity')
    focus_area = request.form.get('focusArea')

# Home page 
@app.route("/")
def home():
    return render_template("home.html")

# Survey page 
@app.route("/survey")
def survey():
    return render_template("survey.html")

# Results page
@app.route("/results")
def results():
    return render_template("results.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
