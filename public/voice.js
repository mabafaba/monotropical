

speaker = {
    voices: [],
    selectedVoice: "Samantha",
    volume: 1,
    rate: 1,
    pitch: 0.5,
    init: function() {
        this.loadVoices();
        // Chrome loads voices asynchronously.
        window.speechSynthesis.onvoiceschanged = function(e) {
            this.loadVoices();
        };
        
    },

    loadVoices: function () {
        // Fetch the available voices.
        this.voices = speechSynthesis.getVoices();
      },

    // Create a new utterance for the specified text and add it to
// the queue.
speak: function (text) {
    // Create a new instance of SpeechSynthesisUtterance.
      var msg = new SpeechSynthesisUtterance();
    
    // Set the text.
      msg.text = text;
    
    // Set the attributes.
      msg.volume = this.volume; // 0 to 1
      msg.rate = this.rate; // 0.1 to 10
      msg.pitch = this.pitch; //0 to 2
    
    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
      if (this.selectedVoice) {
          msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == this.selectedVoice; })[0];
      }
    
    // Queue this utterance.
      window.speechSynthesis.speak(msg);
  }

}


speaker.init();
