from flask import Flask, render_template, request, redirect, url_for, jsonify
import openai

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
