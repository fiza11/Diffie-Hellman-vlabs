from flask import Blueprint, render_template, request
from .api import helper
from .models import Quiz
from .models import db
import json

main=Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template("Introduction.html")

@main.route('/introduction')
def introduction():
    return render_template("Introduction.html")
@main.route('/theory')
def theory():
    return render_template("Theory.html")

@main.route('/objective')
def objective():
    return render_template("Objective.html")

@main.route('/experiment')
def experiment():
    return render_template("Experiment.html")

@main.route('/manual')
def manual():
    return render_template("Manual.html")

@main.route('/quizzes')
def quizzes():
    return render_template("Quizzes.html")

@main.route('/procedure')
def procedure():
    return render_template("Procedure.html")

@main.route('/further_reading')
def further_reading():
    return render_template("Further Readings.html")

@main.route('/feedback', methods=['GET','POST'])
def feedback():
    return render_template("Feedback.html")
    pass

@main.route('/api/genp')
def genp():
    l=0
    l=int(str(request.args.get('bits')))
    if not l:
        l=256
    p = str(helper.genp(l))
    return json.dumps({'prime': p })

@main.route('/api/geng')
def geng():
    l=0
    l=int(str(request.args.get('bits')))
    if not l:
        l=256
    g=str(helper.geng(l))
    return json.dumps({'generator': g })

@main.route('/api/private_key')
def private_key():
    p=int(str(request.args.get('prime')))
    if not p:
        return "Invalid"
    pk=str(helper.genpk(p))
    return json.dumps({'private_key' : pk })

@main.route('/api/calg')
def calg():

    p=int(str(request.args.get('p')))
    a=int(str(request.args.get('a')))
    b=int(str(request.args.get('b')))
    g=int(str(request.args.get('g')))

    Ga = str(helper.calg(g,a,p))
    Gb = str(helper.calg(g,b,p))
    Gab = str(helper.calg(Gb,a,p))
    Gba = str(helper.calg(Ga,b,p))

    ret = {
        'Ga' : Ga,
        'Gb' : Gb,
        'Gab' : Gab,
        'Gba' : Gba,
    }

    return json.dumps(ret)

@main.route('/addanswers', methods = ['POST'])
def addAnswers():
    try:
        answer1 = request.form['q1']
        answer2 = request.form['q2']
        answer3 = request.form['q3']
        answer4 = request.form['q4']
    except:
        flash('Values not obtained',"error")
    Answer = Quiz(answer1, answer2, answer3, answer4)
    db.session.add(Answer)
    db.session.commit()
    return jsonify(stat=true)
