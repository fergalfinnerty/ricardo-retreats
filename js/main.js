(function () {
  "use strict";

  var site = window.SITE || {};

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] != null ? acc[key] : null;
    }, obj);
  }

  function applyBindings() {
    document.querySelectorAll("[data-bind]").forEach(function (el) {
      var val = getPath(site, el.getAttribute("data-bind"));
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-bind-href]").forEach(function (el) {
      var val = getPath(site, el.getAttribute("data-bind-href"));
      if (val) el.setAttribute("href", val);
    });
    if (site.colours) {
      var root = document.documentElement;
      if (site.colours.ivory) root.style.setProperty("--ivory", site.colours.ivory);
      if (site.colours.seaGreen) root.style.setProperty("--sea", site.colours.seaGreen);
      if (site.colours.charcoal) root.style.setProperty("--charcoal", site.colours.charcoal);
      if (site.colours.sand) root.style.setProperty("--sand", site.colours.sand);
      if (site.colours.terracotta) root.style.setProperty("--terracotta", site.colours.terracotta);
    }
  }

  function buildGallery() {
    var gallery = document.getElementById("gallery");
    if (!gallery || !site.images || !site.images.gallery) return;
    gallery.innerHTML = "";
    site.images.gallery.forEach(function (item) {
      var fig = document.createElement("figure");
      var frame = document.createElement("div");
      frame.className = "frame";
      var picture = document.createElement("picture");
      if (item.webp) {
        var source = document.createElement("source");
        source.type = "image/webp";
        source.srcset = item.webp;
        picture.appendChild(source);
      }
      var img = document.createElement("img");
      img.src = item.jpg;
      img.alt = item.alt || "";
      img.loading = "eager";
      img.decoding = "async";
      picture.appendChild(img);
      frame.appendChild(picture);
      fig.appendChild(frame);
      if (item.caption) {
        var cap = document.createElement("figcaption");
        cap.textContent = item.caption;
        fig.appendChild(cap);
      }
      gallery.appendChild(fig);
    });
  }

  function setupNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  function setupForm() {
    var form = document.getElementById("interest-form");
    var status = document.getElementById("form-status");
    var note = document.getElementById("form-endpoint-note");
    var submit = document.getElementById("form-submit");
    var ig = document.getElementById("instagram-link");
    if (!form || !status) return;

    var endpoint = (site.contact && site.contact.formEndpoint) || "";
    var igUrl = (site.contact && site.contact.instagramUrl) || "https://www.instagram.com/ricardchillonpt/";
    if (ig) ig.href = igUrl;

    function showStatus(type, message) {
      status.className = "form-status is-visible " + type;
      status.textContent = message;
    }

    if (!endpoint) {
      if (note) {
        note.textContent =
          "The enquiry form is ready to connect, but no email destination is configured yet. Please use Instagram to get in touch for now.";
      }
      if (submit) {
        submit.textContent = "Open Instagram to enquire";
      }
    } else if (note) {
      note.textContent = "Your message will be sent to Ricard via the configured form endpoint.";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      if (!form.reportValidity()) return;

      if (!endpoint) {
        showStatus(
          "info",
          "No form destination is set up yet, so nothing was submitted from this page. Opening Instagram so you can message Ricard directly."
        );
        window.open(igUrl, "_blank", "noopener,noreferrer");
        return;
      }

      var data = new FormData(form);
      submit.disabled = true;
      fetch(endpoint, {
        method: (site.contact && site.contact.formMethod) || "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          showStatus("success", "Thank you — your interest has been sent. Ricard will be in touch.");
          form.reset();
        })
        .catch(function () {
          showStatus(
            "error",
            "Something went wrong sending the form. Please message Ricard on Instagram instead."
          );
        })
        .finally(function () {
          submit.disabled = false;
        });
    });
  }

  applyBindings();
  buildGallery();
  setupNav();
  setupForm();
})();
