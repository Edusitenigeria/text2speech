window.alert("Welcome To DannyCodes txt2Speech");
        const text = document.getElementById('UserText').value;

        function speak() {
            const utterance = new SpeechSynthesisUtterance(text);

            window.speechSynthesis.speak(utterance);
        }