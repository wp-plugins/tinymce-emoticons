//TinyMCE Emoticons plugin
 (function()
 {
 tinymce.create('tinymce.plugins.TinyEmo',
     {
         init : function(ed, url)
         {

         // Register a button
         ed.addButton('btnTinyEmo',
         {
           title : 'TinyMCE Emoticons',
           //cmd : 'TinyEmo',
           image : url + '/button.png',
           onclick : function() {

           }
         });
     },
     // Returns information about the plugin as a name/value array.
     getInfo : function()
      {
         return {
            longname : "TinyMCE Emoticons",
            author : 'Nazmur Rahman',
            authorurl : 'http://nazmurrahman.com',
            infourl : 'http://nazmurrahman.com',
            version : "1.0"
         };
      }
   });
   // Register plugin
   tinymce.PluginManager.add('tinyemo', tinymce.plugins.TinyEmo);
 })();